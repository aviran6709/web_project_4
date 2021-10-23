import Popup from "./Popup.js";
export default class PopupWithForm extends Popup { 
constructor( popupSelector , {handleSubmit}){
super(popupSelector)
this._handleSubmit = handleSubmit;
this._formElement = this._popupElement.querySelector(".popup__form");

}
_getInputValues() {
const inputs = Array.from(this._formElement.querySelectorAll(".popup__input"))
const inputsValues = { }
inputs.forEach(input => {
inputsValues[input.name] = input.value

});
return inputsValues
}
setEventListeners(){ 
super.setEventListeners();
this._formElement.addEventListener("submit", (evt) =>{
evt.preventDefault();
this._handleSubmit(this._getInputValues());
//this.close() 
}
)};

close(){
super.close()
this._formElement.reset();
}

}
