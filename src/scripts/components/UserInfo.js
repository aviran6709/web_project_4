import {profileName , profileHobby} from "../utils/constants.js"
export default class UserInfo {
constructor({name , job}){
    this._name = name
    this._job = job

}
getUserInfo(){
    retern (this._name , this._job)
}
setUserInfo({name , job}){
    this._name = name
    this._job = job
    profileName.textContent =  name;
    profileHobby.textContent=  job ;
} 
   
}