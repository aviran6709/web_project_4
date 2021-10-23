
export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers; 

  }
//get arry of cards obj from server
  getInitialCard = () => {
    return fetch(`${this.baseUrl}/cards`, { headers: this.headers })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          Promise.reject(res.statusText);
        }
      })
      .catch(console.log);
  };
//get user info from server
  getUserInfo = () => {
    return fetch(`${this.baseUrl}/users/me`, { headers: this.headers })
      .then((res) => {
        if (res.ok) {
            return res.json();
         
        } else {
          Promise.reject(res.statusText);
        }
      })
      .catch(console.log);
    }
 getResComplete(cardId){
  return  this.resComplete
}
//set user info
setUserInfoToServer(inputData ,{handelSaveClickProfilePopup}){
    fetch("https://around.nomoreparties.co/v1/group-12/users/me", {
        method: "PATCH",
        headers: {
          authorization:  "2dbf8d5b-1a4e-4959-a937-202ce5167a76",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: inputData.name,
          about: inputData.about
        })
      }).then((res) => {
        this.resStatus = res.ok
      if (res.ok) {
      return  res.json() 
      } else {
          return Promise.reject(res.status)
      }
      }).then((data)=>{
        handelSaveClickProfilePopup(data , this.resStatus);
      }).catch(console.log)

}
getCardId(cardId){
 this.cardId = cardId;
}
//card like requset
CardLikeRequset=()=>{
   return  fetch(`${this.baseUrl}/cards/likes/${this.cardId}`,
        {
          method: "PUT",
          headers: {
            authorization: "2dbf8d5b-1a4e-4959-a937-202ce5167a76",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
           return res.json();
          } else {
            Promise.reject(res.statusText);
          }
          }).catch(console.log);
        }

 //unlike card req from server
        CardUnLikeRequset =()=>{
          return   fetch(`${this.baseUrl}/cards/likes/${this.cardId}`,
            {
              method: "DELETE",
              headers: {
                authorization: "2dbf8d5b-1a4e-4959-a937-202ce5167a76",
              },
            }
          )
            .then((res) => {
              if (res.ok) {
                return(res.json());
              } else {
                Promise.reject(res.statusText);
              }
              }).catch(console.log);
            }
            
            // requset to chenge profile pic 
              setUserPicUrl =(data ,  {handelSaveToDeleteClick})=>{
                return fetch(`${this.baseUrl}/users/me/avatar `, {
                method: "PATCH",
                headers: {
                  authorization:  "2dbf8d5b-1a4e-4959-a937-202ce5167a76",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    avatar: data.link 
                })
              }).then((res) => {
                this.resStatus = res.ok
                if (res.ok) {
                return res.json()
                } else {
                  Promise.reject(res.statusText);
                }
                }).then((data)=>{
                    handelSaveToDeleteClick(data , this.resStatus);
                }).catch(console.log)
              }
              //add card func
            setCardToServr(data, {handelSaveClick}){
              fetch(`https://around.nomoreparties.co/v1/group-12/cards`, {
                    method: "POST",
                    headers: {
                      authorization:  "2dbf8d5b-1a4e-4959-a937-202ce5167a76",
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      name: data.name,
                      link: data.link
                    })
                  }).then((res) => {
                      this.resStatus = res.ok
                    if ( this.resStatus ) {
                    return  res.json() 
                    } else {
                        return Promise.reject(res.status)
                    }
                    }).then((data)=>{
                        handelSaveClick(data , this.resStatus);
                    }).catch(console.log)
            }
          






deleteCardRequest = (elementId ,  {handelYesClick})=>{
    fetch(`https://around.nomoreparties.co/v1/group-12/cards/${elementId}`,
        {
          method: "DELETE",
          headers: {
            authorization: "2dbf8d5b-1a4e-4959-a937-202ce5167a76",
          },
        }
      )
        .then((res) => {
            this.resStatus = res.ok
          if (this.resStatus) {
            handelYesClick(this.resStatus)
          } else {
            Promise.reject(res.statusText);
          }
        })
        .catch(console.log);
}











            //end of class
            }    
        




//Token: 2dbf8d5b-1a4e-4959-a937-202ce5167a76 Group ID: group-12

export const api = new Api({
  baseUrl: `https://around.nomoreparties.co/v1/group-12`,
  headers: {
    authorization: "2dbf8d5b-1a4e-4959-a937-202ce5167a76",
  },
});

//api.getUserInfo().then((res)=>{console.log(res)})
