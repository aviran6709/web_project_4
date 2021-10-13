
export default class Popup {
constructor(popupSelector){
this._popupElement = document.querySelector(popupSelector);
this.setEventListeners();

}

open(){
    this._popupElement.classList.add('popup_opened'); 
    document.addEventListener("keydown", (evt)=>{   
    this._handleEscClose(evt)
    })
}
close(){
this._popupElement.classList.remove('popup_opened');
document.removeEventListener("keydown" ,this._handleEscClose); 
}
_handleEscClose(evt){
if(evt.key === "Escape"){
this.close();
}
}
setEventListeners(){
const btnCloseElement = this._popupElement.querySelector(".popup__close-btn").
addEventListener("click" , () =>{
this.close();

})
const popupClose = document.querySelector(".popup");
document.addEventListener("click" , (evt) =>{
if(evt.target.classList.contains("popup")){
this.close();

}

})



}
}