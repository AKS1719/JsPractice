// const user ={
//     Username : "akshat",
//     price:900,

//     welcomeMessage:function(){
//         // console.log(`${this.Username} Welcome to website`)
//         // console.log(this)
//     }
// }

// // user.welcomeMessage()
// // user.Username = "aks"
// // user.welcomeMessage()
// // console.log(this)


// function mad(){
//     let user = "manda"
//     console.log(this)
//     // console.log(this.user)
// }

// // mad()




// const baka  =function (){
//     let username = "akshat"
//     console.log(this)
// }

// // baka()

// const dattebayo  =()=>{
//     let username = "akshat"
//     console.log(this)
//     // doesn't have this 
// }

// dattebayo()


// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }

const addTwo = (num1,num2) => num1 + num2
const add = (num1,num2) => {return num1 + num2}
// implicit retrun means wehen one line function then no need  of use return statement 
// Catch -> only when {} not used , if {} these brackets got used then we must write return statement 

// console.log(addTwo(3,4))
// console.log(add(3,4))


const objectreturn = ()=>({"aks":"akshat"})

// when you want to return an object the object must be enclosed within paranthesis ({})
console.log(objectreturn())