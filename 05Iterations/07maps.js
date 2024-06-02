
const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNumber.map((num)=>num+10)

// const newnums = myNumber.map().map().filter() //this is called chaining means adding of new function over previous function

const newnums = myNumber
            .map((num)=>num*10)
            .map((ele)=>ele+1)
            .filter((ele)=>ele>41)
console.log(newnums)