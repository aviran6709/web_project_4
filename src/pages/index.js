import "./index.css";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import {api} from "../scripts/components/Api.js";
import UserInfo from "../scripts/components/UserInfo.js";

import {
  cardSection,
  popupAddBtn,
  settingsObject,
  nameInput,
  jobInput,
  profilePopup,
  creatCardForm,
  popupProfilePic,
  editButton,
  profileEditPicBtn,
  profilePic,
  popupInputPicLink
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
  {
    renderer: (item) => {
      const card = new Card( item.name , item.link , item.likes , item._id, {
        handleCardClick: (item) => {
          imageBig.open(item);
        } 
      });
      const cardElement = card.generateCard();
      //map the card element by owner ids & delete the btn
if(item.owner._id !== popupProfile.getUserInfo()._id ){
    cardElement.querySelector(".card__delete-button").remove()
}
      return cardElement;
    },
  },
  ".cards"
);

const popupEditPic = new PopupWithForm(".popup_edit-profile-pic", {
    handleSubmit: (dataFromInputs) => {
        changinTheButtonText("Saving..." , ".popup__button-edit-profile-pic" )
api.setUserPicUrl(dataFromInputs , {handelSaveToDeleteClick : (linkOfProfilePic , res ) => {
    if(res){
        changinTheButtonText("Save" , ".popup__button-edit-profile-pic" );   
        profilePic.setAttribute("src",linkOfProfilePic.avatar);
        popupEditPic.close()
        popupInputPicLink.value = linkOfProfilePic.avatar;
    } 
}
 } ) 
    }})


    
// add card popup obj
const popupAddCard = new PopupWithForm(".popup_add_card", {
    handleSubmit: (data) => {
        changinTheButtonText("Saving..." , ".popup__button-add" )
    api.setCardToServr(data , {handelSaveClick:(info , res) =>{
        
        const cardAdd = new Card(data.name ,data.link , info.likes , info._id, {
            handleCardClick: (data) => {
               imageBig.open(data);
            },
           })
if(res){
 changinTheButtonText("Create" , ".popup__button-add" );   
    popupAddCard.close()
    
}     
  cardSection.prepend(cardAdd.generateCard());

    }})
}});
     
    

  
//edit profile send PATCH requset to update profile from inputs value
const popupUserInfo = new PopupWithForm(".popup_profile", {
  handleSubmit: (inputData) => {
    changinTheButtonText("Saving..." , ".popup__submit-profile-btn" )
    api.setUserInfoToServer(inputData ,  {handelSaveClickProfilePopup:(info , res) =>{
if(res){
    changinTheButtonText("Save" , ".popup__submit-profile-btn" );   
    popupProfile.setUserInfo(info);
    popupUserInfo.close(); 
}     
  },
});
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

//render the defulet card to DOM using Api class
api.getInitialCard().then((res) => {
  initialCardsList.renderItems(res);
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
popupInputPicLink.value = popupProfile.getUserInfo().avatar;;
popupEditPic.open();
});

export const changinTheButtonText = (text , btnSelector)=>{
const  btnElement = document.querySelector(btnSelector);
btnElement.textContent  = text
 }

