export default class FormValidator {
constructor (settingsObject , formElement){
this.settingsObject = settingsObject;
this.formElement = formElement;
} 


_checkInputValidity = (inputElement) => {
if (inputElement.validity.valid) {
this._hideInputError(inputElement);

} else {
this._showInputError(inputElement , inputElement.validationMessage);
}  }

enableValidation(){
this.inputList = Array.from(this.formElement.querySelectorAll(this.settingsObject.inputSelector));
const btnSubmit = this.formElement.querySelector(this.settingsObject.submitButtonSelector);

this.inputList.forEach((inputElement) => {
inputElement.addEventListener("input", () => {
this._checkInputValidity(inputElement);
this._toggleButtonState(this.inputList, btnSubmit , this.settingsObject);
});
});
}


_hideInputError = (inputElement) => {
const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);
inputElement.classList.remove(this.settingsObject.inputSelector);
errorElement.classList.remove(this.settingsObject.errorClass);
inputElement.classList.remove(this.settingsObject.inputErrorClass);
errorElement.textContent = " ";
}
_showInputError = (inputElement , errorMessage) => {
const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);
inputElement.classList.add(this.settingsObject.inputSelector);
inputElement.classList.add(this.settingsObject.inputErrorClass);
errorElement.textContent = errorMessage;
errorElement.classList.add(this.settingsObject.errorClass);
}



_toggleButtonState(inputElement, buttonElement,settingsObject){
if (this._hasInvalidInput(inputElement)) {
buttonElement.classList.add(settingsObject.inactiveButtonClass);
buttonElement.disabled = "disabled"
console.log("disabled");
} else {
buttonElement.classList.remove(settingsObject.inactiveButtonClass);
buttonElement.disabled = false
console.log("false");
}
};

    // check if input valid
_hasInvalidInput= (inputList) =>{
return inputList.some((inputElement) => {
return !inputElement.validity.valid;    
 })} 
}
