const profileName = document.querySelector(".profile__title");
const profileHobby = document.querySelector(".profile__hobby");
export default class UserInfo {
constructor({name , job}){
    this._name = name
    this._job = job

}
getUserInfo(){
    return (this._name , this._job)
}
setUserInfo({name , job}){
    this._name = name
    this._job = job
    profileName.textContent =  name;
    profileHobby.textContent=  job ;
} 
   
}