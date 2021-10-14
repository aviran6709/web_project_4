import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
    super(popupSelector);
    }
open(item){
this._name = item.name;
this._link = item.link;
const _popupImgParagraph = this._popupElement.querySelector(".popup__img-pargraph");
_popupImgParagraph.textContent =  this._name;
const image = this._popupElement.querySelector(".popup__img-big")
image.alt =  this._name;
image.src = this._link ;
super.open()
super.setEventListeners()
}
}