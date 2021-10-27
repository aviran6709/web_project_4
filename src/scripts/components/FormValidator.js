export default class FormValidator {
  constructor(settingsObject, formElement) {
    this.settingsObject = settingsObject;
    this.formElement = formElement;
  }

  _checkInputValidity = (inputElement) => {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement, inputElement.validationMessage);
    }
  };

  enableValidation() {
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.settingsObject.inputSelector)
    );
   this.btnSubmit = this.formElement.querySelector(
      this.settingsObject.submitButtonSelector
    );

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this.inputList, this.settingsObject);
      });
    });
  }

  _hideInputError = (inputElement) => {
    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this.settingsObject.inputSelector);
    errorElement.classList.remove(this.settingsObject.errorClass);
    inputElement.classList.remove(this.settingsObject.inputErrorClass);
    errorElement.textContent = " ";
  };
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this.settingsObject.inputSelector);
    inputElement.classList.add(this.settingsObject.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.settingsObject.errorClass);
  };

  _toggleButtonState(inputElement,settingsObject) {
    if (!this._hasInvalidInput(inputElement)) {
      this.btnSubmit.classList.remove(settingsObject.inactiveButtonClass);
      this.btnSubmit.disabled = false;
    } else {
      this.btnSubmit.classList.add(settingsObject.inactiveButtonClass);
      this.btnSubmit.disabled = "disabled";
    }
  }

  // check if input valid
  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };


resetValidation = ()=> {
  this.btnSubmit.classList.add(this.settingsObject.inactiveButtonClass);
  this.btnSubmit.disabled = "disabled";
   this.inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
  
    });

  }



}
