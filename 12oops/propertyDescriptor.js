// Object.getOwnPropertyDescriptor() // shows hidden properties of an object


// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)

const akshat = {
    name : "akshat",
    email : "46548@gmail",
    
    updateUser: function(){
        console.log(`upodated user`)
    }
}

console.log(Object.getOwnPropertyDescriptor(akshat, "name"))

Object.defineProperty(akshat,"name",{
    // writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(akshat, "name"))

for (const [key,value ] of Object.entries(akshat)) {
    if(typeof value !== 'function')
    console.log(`${key} : ${value}`)
}