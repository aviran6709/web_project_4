import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector, item ){
    super(popupSelector);
    this._popupElement= document.querySelector(popupSelector)
    this.name = item.name;
    this.link = item.link;
    }
    open(){
const _popupImgParagraph = this._popupElement.querySelector(".popup__img-pargraph");
_popupImgParagraph.textContent =  this.name;
const image = this._popupElement.querySelector(".popup__img-big")
image.alt =  this.name;
image.src = this.link ;
super.open()
}
}