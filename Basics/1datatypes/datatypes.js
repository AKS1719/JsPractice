"use strict" ; // treat all JS code as newer version

// alert(3+3) // using nodejs not browser

let name  = "akshat"
let age = 18
let isLoggedIN = false

// number 2^53 is the range
// bigInt 
// string ==> ""
// boolean => true or false
// null  => standalon value --> means empty
// undefined  --> means value not assigned
// symbol --> uniqueness 

// object 
// console.log(typeof null) // object datatype 
// console.log(typeof undefined)




/**
 * Primitive data types are of 7 types
 * 
 *  String, Number, Boolean, null, undefined, Symbol, BigInt
 * 
 * 
 */


const score =100
const scoreValue = 100.4

const iIsLoggedIN = false
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId)

const bigNumber = 4654654646464797986n

/**
 *  Reference type (Non Primitive)
 * 
 *  Array, Objects, functions
 * 
 *
 */

const heros = ["shaktiman","nagraj","doga"]
let myobj = {
    name:"shakti",
    age :30
}


const myfunctino = function (){
    console.log("Adf")
}

console.log(typeof heros)
console.log(typeof myobj)
console.log(typeof myfunctino)