class User{
    constructor(data){
        const likeImg = "images/heart2.jpg"
        const dislikeImg = "images/cross.jpg"
        Object.assign(this,data)
        this.userHtml = this.getUserHtml()
        this.userLikedHtml = this.likedOrDisliked(likeImg)
        this.userDislikedHtml = this.likedOrDisliked(dislikeImg)


    }
    getUserHtml(){
        const{name,avatar,bio,age} = this
        return`
       
            <img src=${avatar}>   
            <div class="info">
            <h1 class="name">${name} , ${age}</h1>
            <p class="bio">${bio}</p>
            
      `
        
    }
    likedOrDisliked(image){
        const{name,avatar,bio,age} = this
        return `
        <img src=${avatar}>  
        <img class="liked"src=${image}>  
        <div class="info">
        <h1 class="name">${name} , ${age}</h1>
        <p class="bio">${bio}</p>
       
        `
    }
   
}


export default User