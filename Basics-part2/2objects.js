/**
 * objects can be declared as 
 *  ->  literal
 *         -> not become singleton
 *  -> contructors
 *         -> beome singleton
 */

// Object.create  -> contructor declaration

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"akshat",
    "full name":"sinha",
    [mySym]:"mykey1",
    age:18,
    location:"Jharkhand",
    email:"akshatgmail.com",
    isLoggedIn :false,
    lastLoginDays:["Mondays","Saturday"]
}


// accessing values from objects 

// console.log(jsUser.email)
// console.log(jsUser['email'])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])


// jsUser.email = "mandalmixture"
// Object.freeze(jsUser) //now no one can change the values in jsUser
// jsUser.email  = "temp"
console.log(jsUser)


jsUser.greeting = function(){
    console.log(`hello js user`)
}
jsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())