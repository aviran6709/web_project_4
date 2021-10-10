export const settingsObject = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
    };
export const profileName = document.querySelector(".profile__title");
export const profileHobby = document.querySelector(".profile__hobby");
export const editButton = document.querySelector(".profile__edit-btn");
export const profilePopup  = document.querySelector(".popup_profile");
export const profileSubmitBtn  = document.querySelector(".popup__submit-btn ");
export const profileCloseBtn = document.querySelector(".popup__close-btn");
export const popupClose = document.querySelector(".popup");
export const profileForm = profilePopup.querySelector(".popup__content");
export const nameInput = document.querySelector(".popup__input_user_name");
export const jobInput =  document.querySelector(".popup__input_user_hobby");
export const popupAddCard = document.querySelector(".popup_add_card");// the popup block
export const popupAddBtn = document.querySelector(".profile__add-btn");
//adding card section
export const popupCloseBtn = document.querySelector(".popup__close-btn_add_card");
export const cardName = document.querySelector(".popup__input_card_title");//adding card title form
export const cardImage = document.querySelector(".popup__input_card_image");//adding card image form
export const cardSection = document.querySelector(".cards");
export const creatCardForm = document.querySelector(".popup__content_add-card"); //the form element
export const btmSubmitAdd = document.querySelector(".popup__button-add");
//img popup
export const popupImageCloseBtn = document.querySelector(".popup__close-btn_img");
export const popupImage = document.querySelector(".popup_img");
export const popupImgParagraph = document.querySelector(".popup__img-pargraph");
export const imageBig = document.querySelector(".popup__img-big");
export const popupList = Array.from(document.querySelectorAll(".popup"));
export const initialCards = [
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