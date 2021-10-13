export default class Card{
constructor(  cardText , linkImage , {handleCardClick}){
this.cardText = cardText;
this.linkImage = linkImage;
this._handleCardClick = handleCardClick;
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
 this._handleDeleteClick()
}
)}
_handleDeleteClick() {
this._element.remove();
}
_setEventListenersLike(){
this._element.querySelector(".card__like-button").addEventListener("click", (evt) => {
evt.target.classList.toggle("card__like-button_dark"); 
});
}
_setEventListenersPopupImage(){
this._element.querySelector(".card__image").addEventListener("click" , () =>{
this._handleCardClick({name: this.cardText ,link: this.linkImage})
})


}

}        


