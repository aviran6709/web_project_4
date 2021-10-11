import "./index.css";
import Card from "../scripts/components/Card.js";
import FormValidator from '../scripts/components/FormValidator.js';
import Section from "../scripts/components/Section.js";

import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import {cardSection ,popupAddBtn, initialCards ,settingsObject ,profileName,profileHobby ,nameInput,jobInput, profilePopup,creatCardForm,editButton} from "../scripts/utils/constants.js"
const data = {name:"jecob", job : "explorer"}

const addCardValitiy = new FormValidator(settingsObject , profilePopup);
addCardValitiy.enableValidation();
const profileValitiy = new FormValidator(settingsObject , creatCardForm);
profileValitiy.enableValidation();

//initial 6 defulet card
const initialCardsList = new Section({items: initialCards , renderer: (item) =>{
const card = new Card(item.name , item.link ,{handleCardClick: (item) => {
    const imageBig = new PopupWithImage(".popup_img" , item)
    imageBig.open(); 
    }});
const cardElement = card.generateCard();
return cardElement
}},cardSection)
//initial 6 defulet card
initialCardsList.renderItems();

const popupAddCard = new PopupWithForm(".popup_add_card" , {hendelSubmit: (data) => {  
 const {name,link} = data
const cardAdd = new Card(name, link , {handleCardClick: (data) => {
const imageBig = new PopupWithImage(".popup_img", data)
imageBig.open();
}});
cardSection.prepend(cardAdd.generateCard());
popupAddCard.close();
}} );
nameInput.value = profileName.textContent;
jobInput.value = profileHobby.textContent;
const popupUserInfo = new PopupWithForm(".popup_profile" , {hendelSubmit: (data) => { 
    nameInput.value = profileName.textContent;
    jobInput.value = profileHobby.textContent;
    popupUserInfo.open();
    popupTest1.setUserInfo(data)
    popupUserInfo.close();
    nameInput.value = profileName.textContent;
    jobInput.value = profileHobby.textContent;
 

    }})

const popupTest1 = new UserInfo(data); 
editButton.addEventListener("click" , () => {
popupUserInfo.open();
})

popupAddBtn.addEventListener("click" , () => {
    popupAddCard.open();
})

