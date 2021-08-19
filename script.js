//declerision
let editButton = document.querySelector(".profile__edit-btn");
let popUpOpen = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__close-btn");


//funcsion work when click on edit btn
editButton.addEventListener("click",  function(){
popUpOpen.classList.add('popup__opened')

});
//funcsion work when click on x btn to close popup
closeBtn.addEventListener("click",  function(){
popUpOpen.classList.remove('popup__opened')
    
    });

let submitBtn = document.querySelector(".popup__submit-btn");
//function to save the info submit-btn
submitBtn.addEventListener("click",  function(){
    let profileName = document.querySelector(".profile__title"); 
    let profileHobby = document.querySelector(".profile__hobby"); 
    let  userName = document.querySelector(".popup__input_user_name")
     //set the input text 
    profileName.textContent = userName.value 
   
    let  Hobby = document.querySelector(".popup__input_hobby")
    profileHobby.textContent = Hobby.value 

    });


    