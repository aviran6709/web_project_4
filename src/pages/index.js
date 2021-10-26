import "./index.css";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import { api } from "../scripts/components/Api.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupDeleteCard from "../scripts/components/PopupDeleteCard.js";

import {
  popupAddBtn,
  settingsObject,
  nameInput,
  jobInput,
  profilePopup,
  creatCardForm,
  popupProfilePic,
  editButton,
  profileEditPicBtn,
 
} from "../scripts/utils/constants.js";

//enable Validation add card
const addCardValitiy = new FormValidator(settingsObject, profilePopup);
addCardValitiy.enableValidation();
//enable Validation edit profile
const profileValitiy = new FormValidator(settingsObject, creatCardForm);
profileValitiy.enableValidation();

const editProfilePicValitiy = new FormValidator(settingsObject, popupProfilePic);
editProfilePicValitiy.enableValidation();

const imageBig = new PopupWithImage(".popup_img");
//creat obj

const initialCardsList = new Section(
  { renderer: (item) => { return createCard(item) } }, ".cards")
//render the defulet card to DOM using Api class
api.getInitialCard().then((res) => {
  initialCardsList.renderItems(res);
}).catch(console.log)

// add card popup obj
const popupAddCard = new PopupWithForm(".popup_add_card", {
  handleSubmit: (data) => {
    changinTheButtonText("Saving...", ".popup__button-add")
    api.setCardToServr(data).then((data) => {
      initialCardsList.addItem(createCard(data));
      popupAddCard.close()
    }).finally(() => {
      changinTheButtonText("Create", ".popup__button-add");
    })
  }
})
function createCard(data) {
  const newCard = new Card(data, {
    // Call Back for BIg image
    handleCardClick: (data) => {
      imageBig.open(data);
    },
    // Call Back for delete card
    handleDeleteClick: (cardId, element) => {
      const deleteCardpopup = new PopupDeleteCard(".popup_delete-card", {
        handleSaveBtn: () => {
          changinTheButtonText("saving..." , ".popup__button-delete-card")
          api.deleteCardRequest(cardId).finally(() => {
            changinTheButtonText("yes", ".popup__button-delete-card")
            deleteCardpopup.close()
            newCard.removeCard(element);
          })
        }
      }
      )
      deleteCardpopup.open()
// Call Back for like card
    }, handleLikeClick: (isLiked, cardId) => {
      if (!isLiked) {
        api.cardLikeRequset(cardId).then((res) => {
          newCard.getLikeNum(res.likes.length);
        })
          .catch(console.log);
        return true
      } else {
        api.cardUnLikeRequset(cardId).then((res) => {
          newCard.getLikeNum(res.likes.length);
        })
          .catch(console.log);
        return false
      }
    }
  })

  const cardElement = newCard.generateCard();
  newCard.filterCardId(popupProfile.getUserInfo()._id)
  return cardElement
}


const popupEditPic = new PopupWithForm(".popup_edit-profile-pic", {
  handleSubmit: (dataFromInputs) => {
    changinTheButtonText("Saving...", ".popup__button-edit-profile-pic")
    api.setUserPicUrl(dataFromInputs).then((res) => {
      popupEditPic.close()
      popupProfile.setUserInfo(res);

    }).catch(console.log).finally(() => {
      changinTheButtonText("Save", ".popup__button-edit-profile-pic");
    })
  }
})

//edit name & job send PATCH requset to update profile from inputs value
const popupUserInfo = new PopupWithForm(".popup_profile", {
  handleSubmit: (inputData) => {
    changinTheButtonText("Saving...", ".popup__submit-profile-btn")
    api.setUserInfoToServer(inputData).then((res) => {
      popupProfile.setUserInfo(res);
      popupUserInfo.close()
    }
    ).finally(() => {
      changinTheButtonText("Save", ".popup__submit-profile-btn")
    })
  }
})

//set the user info data from server  to the DOM
api.getUserInfo().then((res) => {
  popupProfile.setUserInfo(res);
});
// 
const popupProfile = new UserInfo({
  userNameSelector: ".profile__title",
  jobSelector: ".profile__hobby",
});



//set esc & click event to userInfo form
popupUserInfo.setEventListeners();
popupAddCard.setEventListeners();
popupEditPic.setEventListeners();
imageBig.setEventListeners();
//popupAddCard.setEventListeners();


// btn to open edit profile popup
editButton.addEventListener("click", () => {
  nameInput.value = popupProfile.getUserInfo().name;
  jobInput.value = popupProfile.getUserInfo().about;
  popupUserInfo.open();
});
// btn to open addCard popup
popupAddBtn.addEventListener("click", () => {
  popupAddCard.open();
});
profileEditPicBtn.addEventListener("click", () => {
  popupEditPic.open();
});

export const changinTheButtonText = (text, btnSelector) => {
  const btnElement = document.querySelector(btnSelector);
  btnElement.textContent = text
}

