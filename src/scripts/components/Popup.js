
export default class Popup {
constructor(popupSelector){
this.popupElement = document.querySelector(popupSelector);
this.setEventListeners();

}

open(){
    this.popupElement.classList.add('popup_opened'); 
}
close(){
    this.popupElement.classList.remove('popup_opened'); 
}
_handleEscClose(evt){
    if(evt.key === "Escape"){
        this.close();
        
        }
}
setEventListeners(){
const btnCloseElement = this.popupElement.querySelector(".popup__close-btn").
addEventListener("click" , () =>{
this.close();

})
const popupClose = document.querySelector(".popup");
document.addEventListener("click" , (evt) =>{
if(evt.target.classList.contains("popup")){
this.close();

}

})
document.addEventListener("keydown", (evt) =>{
this._handleEscClose(evt);
})
}
}