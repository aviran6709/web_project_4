import Popup from "./Popup.js";
export default class PopupDeleteCard extends Popup{
constructor(popSelector, {handleSaveBtn}){
super(popSelector)
super.setEventListeners();
this._handleSaveBtn = handleSaveBtn;
this.saveBtnElement = this._popupElement.querySelector(".popup__button-delete-card");
this.setEventListener()
}


setEventListener(){
  this.saveBtnElement.addEventListener("click",this._handleSaveBtn);
   
}

close(){
  super.close()
  this.saveBtnElement.removeEventListener("click",this._handleSaveBtn);
}

}
