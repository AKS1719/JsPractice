

let a = 300
if(true){
    let a = 10
    // console.log(a)
    const b = 20
    var c = 30
}

// console.log(a)
// // console.log(b)
// console.log(c)


/**
 * 
 *  Nested Scope
 */


function one(){
    const username = "akshat"
    function two(){
        const website = "akshat-onerender"
        // console.log(username)
    }
    // console.log(website)
    two()
}

one()





if (true){
    const username = "aks"
    if(username==="aks"){
        const website = "youtube"
        // console.log(username+website)
    }
    // console.log(website)
}

// console.log(username)


// ****************************************interesting 

console.log(addone(5))
function addone(num){
    return num+1
}




const addTwo = function (num){
    return num+2
}

console.log(addTwo(4))
