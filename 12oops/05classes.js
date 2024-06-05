// // ES6


// class User {
//     constructor (username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const aks = new User('akshat','akshat@gmail',1234)
// console.log(aks.encryptPassword())
// console.log(aks.changeUsername())


/**
 * behind the scenes
 */

// function User(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
// }


// User.prototype.encryptPassword = function(){
//     return `${this.password}`
// }


// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const sinha = new User('akshat','akshat@gmail',1234)
// console.log(sinha.encryptPassword())
// console.log(sinha.changeUsername())