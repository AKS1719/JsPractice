// Immediately Invoked Function Expressions (IIFE)

function func1(){
    console.log("connection ")
}

// func1()

// since this function is called immeditaley but while reading it may be assumed that the function is populated through globally to avoid that we can use IIFE

// due to global scope population there will be some issues for which we use IIFE to handle the issues

// ()()
/**
 * the first () is for the defination of function and the second one  is for executin
 */

(function func2(){
    // named IIFE
    console.log("iffe function")
})();

(()=>{
    // unnamed IIFE
    console.log("foncet")
})();

// in the IIFE function always put a semicolon to mark that the satement is complete else it won't understand were the function ends 




((name)=>{
    console.log(`"foncet" ${name}`)
})("akshat");

// taking parameters in IFFe