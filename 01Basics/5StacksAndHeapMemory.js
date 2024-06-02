// ++++++++++++++++++++++++++++++++

// staack memory , Heap memory

// for primitive datatypes stack memory is used 
// for non-primitive datatypes heap memory is used


// stack
let myname = "akshat"
let anothername = myname // copy is given not the address
anothername = "kumar"

console.log(myname)
console.log(anothername)


// heap

let userone = {
    name:"aksat"
}
let usertwo = userone // gives reference not the copy
usertwo.name = "bindas"
console.log(usertwo.name)
console.log(userone.name)

