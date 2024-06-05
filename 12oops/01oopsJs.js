// object literal

const user1 = {
    username: 'akshat',
    logincount : 0,
    signedIn : true,
    getUserDetails: function(){
        console.log("Got details from user" , this.username)
    }
}
const user2 = {
    username: 'akshat',
    logincount : 0,
    signedIn : true,
    getUserDetails: function(){
        console.log("Got details from user" , this.username)
    }
}
//  // for making many user we can't make each and every object by ouselve so we use class
// console.log(user)
// console.log(user.getUserDetails())

// console.log(this)


// const promise1 = new Promise() //  constructor function 
// const date = new Date()  // constructor function

// why we use new keyword 
function user(username,loginCount, isLoggedin){
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedin = isLoggedin
    this.greeting = function(){
        console.log(`Welcome! ${this.username}`)
    }
    return this
}

const userone = new user("aks",12,true)
const usertwo = new user("akshat",11,false)
console.log(userone)
console.log(usertwo)

