import { api } from "./Api.js";
import Popup from "./Popup.js";
import {changinTheButtonText} from "../../pages/index.js"
import {saveBtnElement} from "../utils/constants.js";
export default class PopupDeleteCard extends Popup{
constructor(popSelector, elementId ,{getRes}){
super(popSelector)
super.setEventListeners();
this.setEventListener();
this._elementId = elementId;
this.saveBtnElement = saveBtnElement;
this.getRes = getRes;
}
open(){
  
  super.open()
}
handleSaveBtn=()=>{
  changinTheButtonText("saving..." , ".popup__button_delete-card")
api.deleteCardRequest(this._elementId , {handelYesClick : (IsResOk)=>{
  if(IsResOk){
  this.getRes(IsResOk);
    changinTheButtonText("yes" , ".popup__button_delete-card")
  }
}
})
}
setEventListener(){
    saveBtnElement.addEventListener("click",() =>{this.handleSaveBtn()});
   
}

close(){
super.close()
}
}
