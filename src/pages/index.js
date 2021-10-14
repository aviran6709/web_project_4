import "./index.css";
import Card from "../scripts/components/Card.js";
import FormValidator from '../scripts/components/FormValidator.js';
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import {cardSection ,popupAddBtn, initialCards ,settingsObject ,profileName,profileHobby ,nameInput,jobInput, profilePopup,creatCardForm,editButton} from "../scripts/utils/constants.js"
const data = {name:"Jacques Cousteau", job : "Explorer"}

const addCardValitiy = new FormValidator(settingsObject , profilePopup);
addCardValitiy.enableValidation();
const profileValitiy = new FormValidator(settingsObject , creatCardForm);
profileValitiy.enableValidation();

//initial 6 defulet card
const initialCardsList = new Section({items: initialCards , renderer: (item) =>{
const card = new Card(item.name , item.link ,{handleCardClick: (item) => {
    const imageBig = new PopupWithImage(".popup_img")
    imageBig.open(item); 
    }});
const cardElement = card.generateCard();
return cardElement
}},".cards")
//initial 6 defulet card
initialCardsList.renderItems();

const popupAddCard = new PopupWithForm(".popup_add_card" , {handleSubmit: (data) => {  
const {name,link} = data
const cardAdd = new Card(name, link , {handleCardClick: (data) => {
const imageBig = new PopupWithImage(".popup_img")
imageBig.open(data);
imageBig.setEventListeners()
}});
cardSection.prepend(cardAdd.generateCard());
}});
popupAddCard.setEventListeners();

//popup profile
const popupUserInfo = new PopupWithForm(".popup_profile" , {handleSubmit: (inputData) => { 
popupProfile.setUserInfo(inputData);
popupUserInfo.close();
}})
popupUserInfo.setEventListeners();
// btn to open popup
const popupProfile = new UserInfo({userNameSelector :".profile__title" , jobSelector:".profile__hobby"}); 
editButton.addEventListener("click" , () => {
nameInput.value = popupProfile.getUserInfo()[0];
jobInput.value = popupProfile.getUserInfo()[1];
popupUserInfo.open();


})

popupAddBtn.addEventListener("click" , () => {
    popupAddCard.open();
})

