
//declerision

let profileName = document.querySelector(".profile__title");
let profileHobby = document.querySelector(".profile__hobby");
let editButton = document.querySelector(".profile__edit-btn");
let popUpOpen = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__close-btn");
let formElement = document.querySelector(".popup__content");
let nameInput = document.querySelector(".popup__input_user_name");
let jobInput =  document.querySelector(".popup__input_hobby");

function popOpen(){
    popUpOpen.classList.toggle('popup_opened');
    if (popUpOpen.classList.contains('popup_opened')){
        nameInput.value = profileName.textContent ;
        jobInput.value = profileHobby.textContent ;
        console.log(profileName.textContent )
    };
}

//funcsion work when click on edit btn
editButton.addEventListener("click",  popOpen);
//funcsion work when click on x btn to close popup
closeBtn.addEventListener("click",  popOpen);






function handleFormSubmit(evt) {
evt.preventDefault();
profileName.textContent = nameInput.value ;
profileHobby.textContent = jobInput.value ;

popOpen()
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener("submit", handleFormSubmit);

