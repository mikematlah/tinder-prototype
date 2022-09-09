import people from "./dataPeople.js"
import User from "./class.js"


let isClicked = false
function like(){
   
        if(isClicked === false){
           
            user.hasBeenSwiped = true
            user.hasBeenLiked = true
            console.log(user.hasBeenLiked)
            document.getElementById("main").innerHTML =user.userLikedHtml
            if(people.length > 0){
            isClicked = true;
            setTimeout(() =>{
                user = getNewUser()
                render()
                isClicked = false
            
            },1500)
            
        
        }
        }
      
}
function dislike(){
   
    if(isClicked === false){
        user.hasBeenSwiped = true
        console.log(user.hasBeenLiked)
        document.getElementById("main").innerHTML =user.userDislikedHtml
        if(people.length > 0){
        isClicked = true;
        setTimeout(() =>{
            user = getNewUser()
            render()
            isClicked = false
        
        },1500)
       }
    
    }
    
}
function getNewUser(){
    return new User(people.shift())
}
function render(){
    document.getElementById("main").innerHTML = user.getUserHtml()
}

let user = getNewUser()

render()
document.getElementById("heart").addEventListener("click",like)
document.getElementById("cross").addEventListener("click",dislike)

