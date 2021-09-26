export default class Card{
constructor(cardText , linkImage){
this.cardText = cardText;
this.linkImage = linkImage;
}

_getTemplate(){
const cardElement = document.querySelector(".card-tmp").content.querySelector(".card").cloneNode(true);
return cardElement
}
 generateCard(){
this._element = this._getTemplate();
this._element.querySelector(".card__title").textContent = this.cardText;
this._element.querySelector(".card__image").src = this.linkImage ;
this._element.querySelector(".card__image").alt = this.cardText ; 
this._setEventListenersDelete();
this._setEventListenersLike();
this._setEventListenersPopupImage();
return this._element
}

_setEventListenersDelete(){
this._element.querySelector(".card__delete-button").addEventListener("click", () => {
 this._handlDeleteClick()
}
)}
_handlDeleteClick() {
this._element.remove();
}
_setEventListenersLike(){
this._element.querySelector(".card__like-button").addEventListener("click", (evt) => {
evt.target.classList.toggle("card__like-button_dark"); 
});
}
_setEventListenersPopupImage(){
const popupImageCloseBtn = document.querySelector(".popup__close-btn_img");
this._element.querySelector(".card__image").addEventListener("click" , () =>{
this._handlPopupImage()
})
popupImageCloseBtn.addEventListener("click" , () =>{
this._handlClosePopupImage()
})

}
_handlPopupImage(){
const _popupImage = document.querySelector(".popup_img").classList.add('popup_opened');
const _popupImgParagraph = document.querySelector(".popup__img-pargraph");
_popupImgParagraph.textContent = this.cardText;
const image = document.querySelector(".popup__img-big").src = this.linkImage ;
//image.alt = this.cardText ; 
}
_handlClosePopupImage(){
const _popupImage = document.querySelector(".popup_img").classList.remove('popup_opened');    
}

}        


