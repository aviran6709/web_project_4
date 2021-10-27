
export default class Card {
  constructor( data,{handleCardClick , handleDeleteClick ,handleLikeClick}) {
    this._cardText = data.name;
    this._linkImage = data.link;
    if(this._likeArr == 0){
      this._likeArr=[];
    }else{
      this._likeArr = data.likes
      this.LikeNum = data.likes.length
    }
    this._cardId = data._id ;
    this.cardOwner = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    
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
    if(this.LikeNum == 0){
      this.LikeNum= "" ;}
    this._element.querySelector(".card__likes").textContent = this.LikeNum;
    this._setEventListenersDelete();  
    this. _setEventListenersLike();
    this._setEventListenersPopupImage();
    
    return this._element;
  }
  _getElementId() {
    return this.cardOwner;
  }
  //delete func
  _setEventListenersDelete() {
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click",()=>{
      this._handleDeleteClick(this._cardId , this._element)   
      });
  }
  removeCard(element){
    element.remove()
  } 

  //like event
  _setEventListenersLike() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", this.likeClick);
  }

  //like func
likeClick   = (evt) => {
     if(this._handleLikeClick(this.isLiked , this._cardId)){
      evt.target.classList.add("card__like-button_dark");
      this.isLiked = true     
     }
     else{
      evt.target.classList.remove("card__like-button_dark");
      this.isLiked = false
     }
  };


getLikeNum(res){
if(res > 0){
  this._element.querySelector(".card__likes").textContent = res
}
else{
  this._element.querySelector(".card__likes").textContent = " "
}

}

  filterCardId = (ownerId) => {
    this.isLiked = false;
    if(this.cardOwner !== ownerId) {
    this._element.querySelector(".card__delete-button").remove()
    }
    this._likeArr.forEach((like) => {
      if (
        like._id  ===   ownerId &&
        this._likeArr.length > 0
      ) {
        this.isLiked = true;
        this._element
        .querySelector(".card__like-button")
        .classList.add("card__like-button_dark");
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
