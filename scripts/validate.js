export {toggleButtonState};
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
      if (inputElement.value == " " || inputElement.value.includes("  ") )  {
      return true}
      else{
        return !inputElement.validity.valid;
      }
 
    });
  };


  const toggleButtonState = (inputElement, buttonElement,config) => {
    // console.log(hasInvalidInput(inputElement));
     if (hasInvalidInput(inputElement)) {
     buttonElement.classList.add(config.inactiveButtonClass);
     buttonElement.disabled = "disabled"
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass);
     buttonElement.disabled = false
    }
  };

  
  const checkInputValidity = (formElement, inputElement , config) => {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement , config);
    } else {
        showInputError(formElement, inputElement, inputElement.validationMessage , config);

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
      inputElement.addEventListener("input", function (e) {
        checkInputValidity(formElement, inputElement , config);
        toggleButtonState(inputList, btnSubmit , config);
     
      });
    });
  }); 
  }
  


   export const validObject = {
        formSelector: ".popup__form",
        inputSelector: ".popup__input",
        submitButtonSelector: ".popup__button",
        inactiveButtonClass: "popup__button_disabled",
        inputErrorClass: "popup__input_type_error",
        errorClass: "popup__error_visible"
      }; 

      enableValidation(validObject);