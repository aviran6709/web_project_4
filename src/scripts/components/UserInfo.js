import {profilePic} from "../utils/constants";
export default class UserInfo {
constructor({ userNameSelector, jobSelector }) {
this._profileName = document.querySelector(userNameSelector);
this._profileHobby = document.querySelector(jobSelector);
}
getUserInfo(){

return { name:this._profileName.textContent , about: this._profileHobby.textContent ,_id:this._id , avatar:this.avatar}

}
setUserInfo({name , about ,_id, avatar },){
    this._profileName.textContent = name ;
    this._profileHobby.textContent=  about ;
    this._id = _id;
   profilePic.setAttribute("src", avatar);
     this.avatar = avatar;
    
} 
   
}