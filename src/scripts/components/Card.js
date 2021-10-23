import PopupDeleteCard from "./PopupDeleteCard.js";
import { api } from "./Api.js";
export default class Card {
  constructor(cardText, linkImage, likeArr, cardId, { handleCardClick }) {
    this._cardText = cardText;
    this._linkImage = linkImage;
    this._handleCardClick = handleCardClick;
    this._likeArr = likeArr;
    this._cardId = cardId;
    this.isLiked = false;
    this._likeNum = this._likeArr.length;
    if (this._likeArr.length === 0) {
      this._likeNum = "";
    }
    
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(".card-tmp")
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__title").textContent = this._cardText;
    this._element.querySelector(".card__image").src = this._linkImage;
    this._element.querySelector(".card__image").alt = this._cardText;
    this._element.querySelector(".card__likes").textContent = this._likeNum;
    this._setEventListenersDelete();  
    this._setEventListenersLike();
    this.isLikedByUser();
    if (this.isLiked) {
      this._element
        .querySelector(".card__like-button")
        .classList.add("card__like-button_dark");
    }
    this._setEventListenersPopupImage();
    return this._element;
  }
  _getElementId() {
    return this._cardId;
  }
  //delete func
  _setEventListenersDelete() {
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click",this._handleDeleteClick);
  }
  


  ///work here...
  _handleDeleteClick = ()=>  {
 const deleteCardpopup = new PopupDeleteCard(".popup_delete-card", this._cardId ,{getRes:(resIsOk)=>{
    if (resIsOk) {
        this._element.remove();
        document.removeEventListener("click", this._handleDeleteClick);
        deleteCardpopup.close()
   }
}}) 
    deleteCardpopup.open()
  
  }      
  
  //like event
  _setEventListenersLike() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", this._handleLikeClick);
  }

  //like func
  _handleLikeClick = (evt) => {
    evt.target.classList.toggle("card__like-button_dark");
    if (!this.isLiked) {
      api.getCardId(this._cardId);
      api
        .CardLikeRequset()
        .then((res) => {
          this._element.querySelector(".card__likes").textContent =
            res.likes.length;
        })
        .catch(console.log);
      this.isLiked = true;
      document.removeEventListener("click", this._handleLikeClick);
    } else {
      this._handleUnLikeClick();
    }
  };

  _handleUnLikeClick = () => {
    api.getCardId(this._cardId);
    api
      .CardUnLikeRequset()
      .then((res) => {
        if (res.likes.length === 0) {
          this._element.querySelector(".card__likes").textContent = "";
        } else {
          this._element.querySelector(".card__likes").textContent =
            res.likes.length;
        }
      })
      .catch(console.log);
    this.isLiked = false;
    document.removeEventListener("click", this._handleLikeClick);
  };

  isLikedByUser = () => {
    this._likeArr.forEach((element) => {
      if (
        element._id === "ccd8c51f8677d141b0ee11f9" &&
        this._likeArr.length > 0
      ) {
        return (this.isLiked = true);
      } else {
        return (this.isLiked = false);
      }
    });
  };

  //popup image
  _setEventListenersPopupImage() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick({ name: this._cardText, link: this._linkImage });
      });
  }
}
