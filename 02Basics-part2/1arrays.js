const array = [0,1,2,3,4,5]

// arrays are resizable

// console.log(array[0])

/**
 * whenever performed copy operation shallow copies are made
 *  Shallows copy ,
 *      -> shares the reference 
 *      -> meaning by changing the reference the orginal data will be changed
 * 
 *  Deep copy of object
 *      -> do not shares the reference
 */


const myHeroes = ["shaktiman","sadf"]

const myarr2 = new Array(1,2,3,8767,546)
// console.log(myarr2)


// Array methods


// myHeroes.push("hiii")
// myHeroes.push("hiii")
// console.log(myHeroes)

// myHeroes.pop()
// console.log(myHeroes)

// myHeroes.unshift(9) // adds element to the start by shifting all the present values to the right
// console.log(myHeroes)
// myHeroes.shift() // removes the first element
// console.log(myHeroes)


// console.log(myarr2.includes(9))
// console.log(myarr2.indexOf(3))




// const newarrr= myarr2.join()

// console.log(myarr2)
// console.log(newarrr)
// console.log(typeof newarrr)


// slicing 

// console.log("A",myHeroes)

// const myn1 = myarr2.slice(1,3)  // include 1 index and not inclue 3rd index
// console.log(myn1)
// console.log("B ",myarr2)
// const myn2 = myarr2.splice(1,3)  // remove the provided index values from the array and add it the variable 
// console.log("C ",myarr2)
// console.log(myn2)


const marvelHeroes = ['thor','ironman','spiderman']
const dcHeroes = ['superman','batman','flash']

// marvelHeroes.push(dcHeroes) // takes arrays as data
// console.log(marvelHeroes)

const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

const allnewHeroes = [...marvelHeroes,...dcHeroes] // spread operator ...
// console.log(allnewHeroes)


const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another = another.flat(Infinity) // accepts depth as parameter if don't know the depth then pass infinity
console.log(real_another)

console.log(Array.isArray("akshat")) // check is type of array
console.log(Array.from("akshat")) // creates array 

console.log(Array.from({name:"akshat"}))

let score1 = 100
let score2 = 100
let score3 = 100
console.log(Array.of(score1,score2,score3))

