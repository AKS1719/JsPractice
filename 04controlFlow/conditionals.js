// if

// const isUserLoggedIn = true;
// const temperature =41
// if(isUserLoggedIn){
//     console.log("logged")
// }

// if(2=="2"){
//     console.log("Equal")
// }

// > < <=  >= == !=, ===


// if(temperature<50){
//     console.log("less than 50")
// }
// else console.log("greater than 50")


// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`User power : ${power}`)
// }
// console.log(`User power : ${power}`)


// shorthand notation
// const balance = 1000
// // if (balance > 500) console.log("test")
// // if (balance > 500) console.log("test"),console.log("power")

// if(balance < 500){
//     console.log("less than 500")
// }else if(balance<750){
//     console.log("less than 750")
// }
// else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false



// if (userLoggedIn && debitcard) {
//     console.log("Allow to buy courses")
// }

 if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in ")
 }