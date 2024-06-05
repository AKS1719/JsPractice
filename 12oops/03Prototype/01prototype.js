// let myName =  "akshat    "

// console.log(myName.truelength) // cannot be made this function into prototype



let myHero = ['thor','spiderman']

let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.akshat =  function(){
    console.log('Akshat is present in all objects')
}

Array.prototype.hiAks = function(){
    console.log('Akshat says hello')
}

// heroPower.akshat()
// myHero.akshat()
// heroPower.hiAks()
// myHero.hiAks()

/**
 * Refer to the image of prototype function finding through the heirarchy
 */

const User = {
    name:"akshat",
    emal:"aksaht@microsoft"
}

const Teacher = {
    makeVide:true
}

const TeachingSupport = {
    isAvailable : false
}


/**
 *  prototyples inheritance
 *  we can make the inheritance of prototype of another class to child class
 */
const TASupport = {
    makeAssignment : 'Js assignment',
    fullTime : true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User;


/**
 * Modern Syntax
 */

                    // to            , from
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "akshat and code          "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"aks".trueLength()