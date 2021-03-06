
export default class Popup {
constructor(popupSelector){
this._popupElement = document.querySelector(popupSelector);

}
open(){
this._popupElement.classList.add('popup_opened');
document.addEventListener("keydown", this._handleEscClose) 

}

close(){
this._popupElement.classList.remove('popup_opened');
document.removeEventListener("keydown" , this._handleEscClose)
//document.removeEventListener("click" , this._handleOverlayClick)
}

_handleEscClose = (evt)=>{
if(evt.key === "Escape"){
evt.preventDefault()
this.close()
}}

_handleOverlayClick = (evt)=>{
if(evt.target.classList.contains("popup") || evt.target.classList.contains(`popup__close-btn`)){
this.close();
}
}

setEventListeners(){
 this._popupElement.addEventListener("click" , this._handleOverlayClick)
}
}