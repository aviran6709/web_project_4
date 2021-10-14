
export default class UserInfo {
constructor({ userNameSelector, jobSelector }) {
this.profileName = document.querySelector(userNameSelector);
this.profileHobby = document.querySelector(jobSelector);
}
getUserInfo(){

return [this.profileName.textContent , this.profileHobby.textContent]

}
setUserInfo({name , job}){
    this.profileName.textContent = name ;
    this.profileHobby.textContent=  job ;
} 
   
}