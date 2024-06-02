const userEmail = "email.ai"
// const userEmail = []
// const userEmail = ""

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don;t have user email")
}

/**
 * falsy values 
 * 
 * false
 * 0
 * -0
 * BigInt 0n
 * ""
 * null
 * undefined
 * Nan
 * 
 * except this all other are the truthy values
 *  */


/**
 * Truthy values
 * 
 * "0"
 * 'false'
 * ' '
 * []
 * {}
 * function(){}
 */


// if userEmail is a array userEmail.length
// if user email is object the Object.keys(objectName).length



// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 6 ?? 10 // if first value have a chance of gettign null then assign by default value as 10
// val1 = null ?? 10 // if first value have a chance of gettign null then assign by default value as 10
// val1 = undefined ?? 10 // if first value have a chance of gettign null then assign by default value as 10

val1 = null ?? 10 ?? 20;
console.log(val1);


// Ternary operators

// condition ? true:false

const iceteaPrice = 100
iceteaPrice < 80? console.log("less than 80"):console.log("More than 80")