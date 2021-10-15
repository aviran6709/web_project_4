
export default class UserInfo {
constructor({ userNameSelector, jobSelector }) {
this._profileName = document.querySelector(userNameSelector);
this._profileHobby = document.querySelector(jobSelector);
}
getUserInfo(){

return {name:this._profileName.textContent , job: this._profileHobby.textContent}

}
setUserInfo({name , job}){
    this._profileName.textContent = name ;
    this._profileHobby.textContent=  job ;
} 
   
}