// array specific loops

//  for of

const arr = [1,2,3,4,5]

for (const iterator of arr) {
    // console.log(iterator)
}
const greetings = "Hello World"

for (const iterator of greetings) {
    // console.log(iterator)
}


// maps 

const map = new Map()

map.set("in","india")
// map.set("in","ijndia")
map.set("sm","simp")
map.set("temp","mtpm")
map.set("Adf","sdfadf")

// console.log(map)

for (const iterator of map) {
    // console.log(iterator)
    // console.log(iterator[0]+" "+iterator[1])
}
for (const [key,value] of map) {
    // console.log(key+" "+value)
}


// for of wont work on object use for in for objects


for (const key in arr) {
   console.log(key) //  gives the index or keys 
}
