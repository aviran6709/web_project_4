import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector, item ){
    super(popupSelector);
    this.name = item.name;
    this.link = item.link;
    }
    open(){
    super.open()
const _popupImgParagraph = document.querySelector(".popup__img-pargraph");
_popupImgParagraph.textContent =  this.name;
const image = document.querySelector(".popup__img-big").src = this.link ;

}
}