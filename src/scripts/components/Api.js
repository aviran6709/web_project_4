const custumeFetch=(url , headers)=>{
    return fetch(url ,headers).then((res)=>{
       if(res.ok){return res.json();}
     else { Promise.reject(res.statusText);}})
         
}
export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers; 

  }
//get arry of cards obj from server
  getInitialCard = () => {
    return custumeFetch(`${this.baseUrl}/cards`, { headers: this.headers })
     
  };
//get user info from server
  getUserInfo = () => {
    return custumeFetch(`${this.baseUrl}/users/me`, { headers: this.headers })
    }
    
 getResComplete(cardId){
  return  this.resComplete
}
//set user info
setUserInfoToServer=(inputData)=>{
   return custumeFetch(`${this.baseUrl}/users/me`,{
        method: "PATCH",
      headers: this.headers,
        body: JSON.stringify({
          name: inputData.name,
          about: inputData.about
        })
       })

}
getCardId(cardId){
 this.cardId = cardId;
}
//card like requset
cardLikeRequset=(cardId)=>{
   return  custumeFetch(`${this.baseUrl}/cards/likes/${cardId}`,
        {
          method: "PUT",
          headers:this.headers,
        }
      )
        }

 //unlike card req from server
        cardUnLikeRequset =(cardId)=>{
          return   custumeFetch(`${this.baseUrl}/cards/likes/${cardId}`,
            {
              method: "DELETE",
              headers:this.headers,
            }
          )
            }
            
            // requset to chenge profile pic 
              setUserPicUrl =(data)=>{
                return custumeFetch(`${this.baseUrl}/users/me/avatar`, {
                method: "PATCH",
                headers: this.headers,
                body: JSON.stringify({
                    avatar: data.link 
                })
              })
              }
              //add card func
            setCardToServr(data){
             return custumeFetch(`${this.baseUrl}/cards`, {
                    method: "POST",
                    headers:this.headers,
                    body: JSON.stringify({
                      name: data.name,
                      link: data.link
                    })
                  })
            }
          
deleteCardRequest = (elementId)=>{
  return custumeFetch(`${this.baseUrl}/cards/${elementId}`,
        {
          method: "DELETE",
          headers: this.headers,
        }
      )
      }
            //end of class
            }    
        




//Token: 2dbf8d5b-1a4e-4959-a937-202ce5167a76 Group ID: group-12
//console.log(this.headers)
export const api = new Api({
  baseUrl: `https://around.nomoreparties.co/v1/group-12`,
  headers: {
    authorization: "2dbf8d5b-1a4e-4959-a937-202ce5167a76",
    "Content-Type": "application/json"
  }
});

//api.getUserInfo().then((res)=>{console.log(res)})
