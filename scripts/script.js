import Card from './Card.js';
 import FormValidator from './FormValidator.js';



const settingsObject = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
    };
const profileName = document.querySelector(".profile__title");
const profileHobby = document.querySelector(".profile__hobby");
const editButton = document.querySelector(".profile__edit-btn");
const profilePopup  = document.querySelector(".popup_profile");
const profileSubmitBtn  = document.querySelector(".popup__submit-btn ");
const profileCloseBtn = profilePopup.querySelector(".popup__close-btn");
const popupClose = document.querySelector(".popup");
const profileForm = profilePopup.querySelector(".popup__content");
const nameInput = document.querySelector(".popup__input_user_name");
const jobInput =  document.querySelector(".popup__input_user_hobby");
const popupAddCard = document.querySelector(".popup_add_card");// the popup block
const popupAddBtn = document.querySelector(".profile__add-btn");
//adding card section
const popupCloseBtn = document.querySelector(".popup__close-btn_add_card");
const cardName = document.querySelector(".popup__input_card_title");//adding card title form
const cardImage = document.querySelector(".popup__input_card_image");//adding card image form
const cardSection = document.querySelector(".cards");
const creatCardForm = document.querySelector(".popup__content_add-card"); //the form elment
const btmSubmitAdd = document.querySelector(".popup__button-add");
//img popup
const popupImageCloseBtn = document.querySelector(".popup__close-btn_img");
const popupImage = document.querySelector(".popup_img");
const popupImgParagraph = document.querySelector(".popup__img-pargraph");
const imageBig = document.querySelector(".popup__img-big");
const popupList = Array.from(document.querySelectorAll(".popup"));
const initialCards = [
    {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Vanoise National Park",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ];
  const addCardValitiy = new FormValidator(settingsObject , profilePopup);
addCardValitiy.enableValidation();
const profileValitiy = new FormValidator(settingsObject , creatCardForm);
profileValitiy.enableValidation();

  function togglePopup(popup){
    popup.classList.toggle('popup_opened'); 
    if (popup.classList.contains("popup_opened")){
    document.addEventListener("click" , eventListenerCloseClick);
    document.addEventListener("keydown" , eventListenerCloseEsc);
    }
    else{
      document.removeEventListener("click" , eventListenerCloseClick);
      document.removeEventListener("keydown" , eventListenerCloseEsc);
    }
    }
//funcsion work when click on edit btn
editButton.addEventListener("click", function() {
togglePopup(profilePopup);
//if (profilePopup.classList.contains('popup_opened')){
nameInput.value = profileName.textContent;
jobInput.value = profileHobby.textContent;
})

function handleEditProfileFormSubmit(evt) {
evt.preventDefault();
profileName.textContent = nameInput.value;
profileHobby.textContent = jobInput.value;
togglePopup(profilePopup);
}
profileCloseBtn.addEventListener("click",function() {
togglePopup(profilePopup);
});

//add card btm func open
const openAddCardPopup = () =>{
 // btmSubmitAdd.disabled = "disabled"
 // btmSubmitAdd.classList.add("popup__button_disabled");
  togglePopup(popupAddCard)  
  creatCardForm.reset(); 
  }

popupAddBtn.addEventListener("click",  function () {
openAddCardPopup();
});
//funcsion work when click on x btn to close popup
// add btn
popupCloseBtn.addEventListener("click",  openAddCardPopup);
//submit btn   
// Connect the handler to the form:
// it will watch the submit event
profileForm.addEventListener("submit", handleEditProfileFormSubmit);
//initialCards func
//##########################################
initialCards.forEach(function (arrElement){
  const card = new Card(arrElement.name , arrElement.link)
 const cardElement = card.generateCard();
cardSection.append(cardElement);
});

creatCardForm.addEventListener("submit",  handleFormSubmitCardAdd);

//function for submit add card form
function handleFormSubmitCardAdd(evt) {
evt.preventDefault();
const card = new Card(cardName.value, cardImage.value);
const cardElement = card.generateCard();
cardSection.prepend(cardElement);
openAddCardPopup();
}

function eventListenerCloseEsc(evt){
  if(evt.key === "Escape"){
    popupList.find((popupElement) =>{
    if (popupElement.classList.contains("popup_opened")){
    togglePopup(popupElement);
    creatCardForm.reset(); 
    }
    });          
}}
function eventListenerCloseClick(evt){
  if(evt.target.classList.contains("popup")){
    popupList.find((popupElement) =>{
    if (popupElement.classList.contains("popup_opened")){
    togglePopup(popupElement);
    }})}}