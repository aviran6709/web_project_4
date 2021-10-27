import Popup from "./Popup.js";
export default class PopupDeleteCard extends Popup{
constructor(popSelector){
super(popSelector)
this.saveBtnElement = this._popupElement.querySelector(".popup__button-delete-card");

}
setAction = (action)=>{
  this._handleSaveBtn = action;

}

setEventListener(){
  super.setEventListeners(); 
  this.saveBtnElement.addEventListener("click", ()=>{
    this._handleSaveBtn();
    
  });
   
}



}
