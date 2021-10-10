import Popup from "./Popup.js";
export default class PopupWithForm extends Popup { 
constructor( popupSelector , {hendelSubmit}){
super(popupSelector)
this._hendelSubmit = hendelSubmit;
this._fromElement = document.querySelector(".popup__form");

}
_getInputValues() {
this._fromElement = this.popupElement.querySelector(".popup__form");
const inputs = Array.from(this._fromElement.querySelectorAll(".popup__input"))
const inputsValues = { }
inputs.forEach(input => {
inputsValues[input.name] = input.value

});
return inputsValues
}
setEventListeners(){ 
super.setEventListeners();
this._fromElement = this.popupElement.querySelector(".popup__form");
this._fromElement.addEventListener("submit", (evt) =>{
evt.preventDefault();
this._hendelSubmit(this._getInputValues());
}
)};

close(){
super.close()
this._fromElement.reset();
}

}