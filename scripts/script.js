
const profileName = document.querySelector(".profile__title");
const profileHobby = document.querySelector(".profile__hobby");
const editButton = document.querySelector(".profile__edit-btn");
const profilePopup  = document.querySelector(".popup_profile");
//const popup  = document.querySelector(".popup");

const profileCloseBtn = profilePopup.querySelector(".popup__close-btn");
 
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
 //img popup
 const popupImgeCloseBtn = document.querySelector(".popup__close-btn_img");
 const popupImge = document.querySelector(".popup_img");
 const popupImgParagraph = document.querySelector(".popup__img-pargraph");
 const imageBig = document.querySelector(".popup__img-big");



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


//edit porfile btn func open
function togglePopup(popup){
    popup.classList.toggle('popup_opened');
   
}

//funcsion work when click on edit btn
editButton.addEventListener("click", function() {
    togglePopup(profilePopup);
    if (profilePopup.classList.contains('popup_opened')){
        nameInput.value = profileName.textContent;
        jobInput.value = profileHobby.textContent;
     }
    }   
)
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileHobby.textContent = jobInput.value;
    
    togglePopup(profilePopup);
    }

profileCloseBtn.addEventListener("click",function() {
    togglePopup(profilePopup);
});
//add card btm func open
const toggleAddCardPopup = () =>{
    togglePopup(popupAddCard)}
//funcsion work when click on x btn to close popup



// add btn
popupAddBtn.addEventListener("click",  toggleAddCardPopup);
popupCloseBtn.addEventListener("click",  toggleAddCardPopup);
//submit btn


    
    // Connect the handler to the form:
    // it will watch the submit event
    profileForm.addEventListener("submit", handleFormSubmit);

//initialCards func
//##########################################
initialCards.forEach(function (arrElement){
    cardSection.append(addCard(arrElement.name , arrElement.link))
});


// add card function
//#######################################
function addCard(title, url){
  //  initialCards.unshift({name: title, link: url});
    let template = document.querySelector(".card-tmp").content.querySelector(".card");
    //creat clone from template of card 
    let cardElement = template.cloneNode(true);
    let titleCard = cardElement.querySelector(".card__title").textContent = title;
    let imageCard = cardElement.querySelector(".card__image");
    imageCard.src = url;
    imageCard.alt = title ; 
    //delete card by click the btn
let deleteBtn = cardElement.querySelector(".card__delete-button");
deleteBtn.addEventListener("click", function (evt) {
    const eventTarget = evt.target.parentElement//.style.display = "none";
    cardElement.remove();
});
//replace the like btn background
let likeBtn = cardElement.querySelector(".card__like-button");
likeBtn.addEventListener("click", function (evt) {
   const eventTarget = evt.target;
   eventTarget.classList.toggle("card__like-button_dark");  
});


imageCard.addEventListener("click", function() {
         togglePopup(popupImge);
        imageBig.src = url;
        popupImgParagraph.textContent = title
 
    } );

 return cardElement;
}

popupImgeCloseBtn.addEventListener("click" , function() {
    togglePopup(popupImge);
} );


//function for submit add card form
function handleFormSubmitCardAdd(evt) {
    evt.preventDefault();
    cardSection.prepend(addCard(cardName.value, cardImage.value));  
    cardImage.value = " "
 cardName.value =  " "
 toggleAddCardPopup();
    }

  creatCardForm.addEventListener("submit",  handleFormSubmitCardAdd);
    






