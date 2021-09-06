
const showInputError = (formElement, inputElement, errorMessage , config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(config.inputSelector);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);

  };
  
  const hideInputError = (formElement, inputElement , config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(config.inputSelector);
    errorElement.classList.remove(config.errorClass);
    inputElement.classList.remove("popup__input_type_error");
    errorElement.textContent = " ";
  };
  
// check if input valid
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };


  const toggleButtonState = (inputElement, buttonElement,config) => {
    if (!hasInvalidInput(inputElement)) {
     buttonElement.classList.remove(config.inactiveButtonClass);
     buttonElement.disabled = false
    } else {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled = "disabled"
    }
  };

  
  const checkInputValidity = (formElement, inputElement , config) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage , config);
    } else {
      hideInputError(formElement, inputElement , config);
    }
  };
  



  const enableValidation = (config) => {
     const formList = Array.from(document.querySelectorAll(config.formSelector)); 
    formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault( );
    });
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const btnSubmit = formElement.querySelector(config.submitButtonSelector);
    if(btnSubmit.hasAttribute("disabled")){
        btnSubmit.classList.add(config.inactiveButtonClass);
       
        }
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement , config);
        toggleButtonState(inputList, btnSubmit , config);
 
      });
    });
  }); 
  }
  


   const validObject = {
        formSelector: ".popup__form",
        inputSelector: ".popup__input",
        submitButtonSelector: ".popup__button",
        inactiveButtonClass: "popup__button_disabled",
        inputErrorClass: "popup__input_type_error",
        errorClass: "popup__error_visible"
      }; 

      enableValidation(validObject);