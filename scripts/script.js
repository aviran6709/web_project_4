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

  function openPopup (popup){
    popup.classList.add('popup_opened'); 
    document.addEventListener("click" , eventListenerCloseClick);
    document.addEventListener("keydown" , eventListenerCloseEsc);
  }
  function closePopup (popup){
    popup.classList.remove('popup_opened');
      document.removeEventListener("click" , eventListenerCloseClick);
      document.removeEventListener("keydown" , eventListenerCloseEsc);
    
    }
//funcsion work when click on edit btn
editButton.addEventListener("click", function() {
  openPopup(profilePopup);
//if (profilePopup.classList.contains('popup_opened')){
nameInput.value = profileName.textContent;
jobInput.value = profileHobby.textContent;
})

function handleEditProfileFormSubmit(evt) {
evt.preventDefault();
profileName.textContent = nameInput.value;
profileHobby.textContent = jobInput.value;
closePopup(profilePopup);
}
profileCloseBtn.addEventListener("click",function() {
  closePopup(profilePopup);
});

//add card btm func open
const openAddCardPopup = () =>{
 // btmSubmitAdd.disabled = "disabled"
 // btmSubmitAdd.classList.add("popup__button_disabled");
 openPopup(popupAddCard)  
  creatCardForm.reset(); 
  }

popupAddBtn.addEventListener("click",  function () {
openAddCardPopup();
});
//funcsion work when click on x btn to close popup
// add btn
popupCloseBtn.addEventListener("click", () => {
  closePopup(popupAddCard);

});
//submit btn   
// Connect the handler to the form:
// it will watch the submit event
profileForm.addEventListener("submit", handleEditProfileFormSubmit);
//initialCards func
//##########################################
initialCards.forEach(function (arrElement){
cardSection.append( createCard(arrElement.name , arrElement.link));
});
popupImageCloseBtn.addEventListener("click" , () =>{
  closePopup(popupImage);
  })

creatCardForm.addEventListener("submit",  handleFormSubmitCardAdd);

function createCard(cardName, cardImage) {
const card = new Card(cardName, cardImage);
const cardElement = card.generateCard();
 
return cardElement
}  

//function for submit add card form
function handleFormSubmitCardAdd(evt) {
evt.preventDefault();
cardSection.prepend(createCard(cardName.value , cardImage.value));
closePopup(popupAddCard);
}

function eventListenerCloseEsc(evt){
  if(evt.key === "Escape"){
  const popupElement = document.querySelector(".popup_opened");
  closePopup(popupElement);
  
  }
    }
              
function eventListenerCloseClick(evt){
  if(evt.target.classList.contains("popup")){
    const popupElement = document.querySelector(".popup_opened");
    closePopup(popupElement);
  }
}