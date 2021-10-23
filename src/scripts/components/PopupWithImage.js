import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(item) {
    const _popupImgParagraph = this._popupElement.querySelector(
      ".popup__img-pargraph"
    );
    const image = this._popupElement.querySelector(".popup__img-big");
    this._name = item.name;
    this._link = item.link;
    
    _popupImgParagraph.textContent = this._name;
    image.alt = this._name;
    image.src = this._link;
    super.open();
  }
}
