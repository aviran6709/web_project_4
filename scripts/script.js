
let profileName = document.querySelector(".profile__title");
let profileHobby = document.querySelector(".profile__hobby");
let editButton = document.querySelector(".profile__edit-btn");
let popUpOpen = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__close-btn");
let formElement = document.querySelector(".popup__content");
let nameInput = document.querySelector(".popup__input_user_name");
let jobInput =  document.querySelector(".popup__input_user_hobby");
let popupAddCard = document.querySelector(".popup_add_card");// the popup block
let popupAddBtn = document.querySelector(".profile__add-btn");
//adding card section
let popupCloseBtn = document.querySelector(".popup__close-btn_add_card");
let cardName = document.querySelector(".popup__input_card_title");//adding card title form
let cardImage = document.querySelector(".popup__input_card_image");//adding card image form
let card = document.querySelector(".cards");
let creatCardForm = document.querySelector(".popup__content_add-card"); //the form elment
 //img popup
 let popupImgeCloseBtn = document.querySelector(".popup__close-btn_img");
 let popupImge = document.querySelector(".popup_img");
 let popupImgParagraph = document.querySelector(".popup__img-pargraph");
 let imageBig = document.querySelector(".popup__img-big");



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
function popOpen(){
    popUpOpen.classList.toggle('popup_opened');
    if (popUpOpen.classList.contains('popup_opened')){
        nameInput.value = profileName.textContent;
        jobInput.value = profileHobby.textContent;
     
    }
}


//add card btm func open
const popupAddCardOpenFunc = () =>{
    popupAddCard.classList.toggle('popup_opened');
}

//funcsion work when click on edit btn
editButton.addEventListener("click",  popOpen);


//funcsion work when click on x btn to close popup
closeBtn.addEventListener("click", popOpen);


// add btn
popupAddBtn.addEventListener("click",  popupAddCardOpenFunc);
popupCloseBtn.addEventListener("click",  popupAddCardOpenFunc);
//submit btn

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileHobby.textContent = jobInput.value;
    
    popOpen();
    }
    
    // Connect the handler to the form:
    // it will watch the submit event
    formElement.addEventListener("submit", handleFormSubmit);

//initialCards func
//##########################################
initialCards.forEach(function (arrElement){
card.append(addCard(arrElement.name , arrElement.link))
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
    imageCard.src = url ;
    card.append(cardElement);
 
    //delete card by click the btn
let deleteBtn = cardElement.querySelector(".card__delete-button");
deleteBtn.addEventListener("click", function (evt) {
    const eventTarget = evt.target.parentElement.style.display = "none";
});
//replace the like btn background
let likeBtn = cardElement.querySelector(".card__like-button");
likeBtn.addEventListener("click", function (evt) {
   const eventTarget = evt.target;
   eventTarget.classList.toggle("card__like-button_dark");  
});


imageCard.addEventListener("click", function() {
        popupImge.classList.add('popup_opened');
        imageBig.src = url;
        popupImgParagraph.textContent = title
 
    } );

 return cardElement;
}

popupImgeCloseBtn.addEventListener("click" , function() {
    popupImge.classList.remove('popup_opened');
} );


//function for submit add card form
function handleFormSubmitCardAdd(evt) {
    evt.preventDefault();
    card.prepend(addCard(cardName.value, cardImage.value));  
    //cardImage.value = cardImage.placeholder
   // cardName.value =  cardName.placeholder
    popupAddCardOpenFunc();
    }

  creatCardForm.addEventListener("submit",  handleFormSubmitCardAdd);
    






