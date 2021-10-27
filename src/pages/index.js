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
let userId
//enable Validation add card
const addCardValitiy = new FormValidator(settingsObject, creatCardForm );
addCardValitiy.enableValidation();
//enable Validation edit profile
const profileValitiy = new FormValidator(settingsObject,profilePopup);
profileValitiy.enableValidation();
//enable Validation edit profile pic
const editProfilePicValitiy = new FormValidator(settingsObject, popupProfilePic);
editProfilePicValitiy.enableValidation();

const imageBig = new PopupWithImage(".popup_img");
const deleteCardpopup = new PopupDeleteCard(".popup_delete-card")
const popupProfile = new UserInfo({
  userNameSelector: ".profile__title",
  jobSelector: ".profile__hobby",
});
const initialCardsList = new Section(
  { renderer: (item) => { return createCard(item) } }, ".cards")

// add card popup 
const popupAddCard = new PopupWithForm(".popup_add_card", {
  handleSubmit: (data) => {
    changeTheButtonText("Saving...", ".popup__button-add")
    api.setCardToServr(data).then((data) => {
      initialCardsList.addItem(createCard(data));
      popupAddCard.close()
    }).catch(console.log).finally(() => {
      changeTheButtonText("Create", ".popup__button-add");
    })
  }
})

const popupEditPic = new PopupWithForm(".popup_edit-profile-pic", {
  handleSubmit: (dataFromInputs) => {
    changeTheButtonText("Saving...", ".popup__button-edit-profile-pic")
    api.setUserPicUrl(dataFromInputs).then((res) => {
      popupEditPic.close()
      popupProfile.setUserInfo(res);

    }).catch(console.log).finally(() => {
      changeTheButtonText("Save", ".popup__button-edit-profile-pic");
    })
  }
})

//render the defulet card to DOM using Api class
Promise.all([api.getInitialCard(),api.getUserInfo()]).then(([cardData , userInfo])=>{ 
  userId = userInfo;
  initialCardsList.renderItems(cardData);
  popupProfile.setUserInfo(userInfo)
}).catch(console.log)

//functions
function createCard(data) {
  const newCard = new Card(data, {
    // Call Back for BIg image
    
    handleCardClick: (data) => {
      imageBig.open(data);
    },
    // Call Back for delete card
    handleDeleteClick: (cardId ,element) => {
      deleteCardpopup.open()
      deleteCardpopup.setAction(()=>{
        changeTheButtonText("saving..." , ".popup__button-delete-card")
        api.deleteCardRequest(cardId).then(()=>{
          deleteCardpopup.close()
          newCard.removeCard(element);
        }).catch(console.log)
        .finally(() => {
          changeTheButtonText("yes", ".popup__button-delete-card")  
        })
      }   
      ) 
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
  newCard.filterCardId(userId._id)
  return cardElement
}

const changeTheButtonText = (text, btnSelector) => {
  const btnElement = document.querySelector(btnSelector);
  btnElement.textContent = text
}


//edit name & job send PATCH requset to update profile from inputs value
const popupUserInfo = new PopupWithForm(".popup_profile", {
  handleSubmit: (inputData) => {
    changeTheButtonText("Saving...", ".popup__submit-profile-btn")
    api.setUserInfoToServer(inputData).then((res) => {
      popupProfile.setUserInfo(res);
      popupUserInfo.close()
    }
    ).catch(console.log).finally(() => {
      changeTheButtonText("Save", ".popup__submit-profile-btn")
    })
  }
})


// 




//set esc & click event to userInfo form
popupUserInfo.setEventListeners();
popupAddCard.setEventListeners();
popupEditPic.setEventListeners();
imageBig.setEventListeners();
//popupAddCard.setEventListeners();
deleteCardpopup.setEventListener();


// btn to open edit profile popup
editButton.addEventListener("click", () => {
  nameInput.value = popupProfile.getUserInfo().name;
  jobInput.value = popupProfile.getUserInfo().about;
  popupUserInfo.open();
});
// btn to open addCard popup
popupAddBtn.addEventListener("click", () => {
  addCardValitiy.resetValidation()
  popupAddCard.open();
});
profileEditPicBtn.addEventListener("click", () => {
  editProfilePicValitiy.resetValidation();
  popupEditPic.open();
});


