function sayMyName(){
    console.log('a')
    console.log('k')
    console.log('s')
    console.log('h')
    console.log('a')
    console.log('t')
}


// sayMyName --> reference of the function 
// sayMyName() --> execution of the function

// when writing a function we call parameters
function addTwoNumber(num1,num2)
{
    return num1+num2
}

// when calling a function we say the arguments
const result = addTwoNumber(3,"a")
// console.log(result)

function loginuserMessage(username){
    if(!username){
        console.log("Please Enter a username")
        return 
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("akshat"))
// console.log(loginuserMessage())

/**
 * when you don't know how many parameter will come to the function then use the rest operator ...num1
 */
function calculateCartPrice(...num1){
    return num1
}
function calculateCartPrice1(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(2,500,400,400,5000))
// console.log(calculateCartPrice1(2,500,400,400,5000))


const user = {
    username:"akshat",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
// handleObject({
//     username:"adk",
//     price:500,
// })


const mynewarr = [200,400,100,600]


function returnsecongval(getarr){
    return getarr[1]
}

console.log(returnsecongval(mynewarr))