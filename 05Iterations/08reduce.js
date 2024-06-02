const mynums = [1,2,3,4]

// const mytotal = mynums.reduce((accumulator,currval)=>{
//     console.log(`Acc ${accumulator}  curr ${currval}`)
//     return accumulator+currval
// },0)
const mytotal = mynums.reduce((accumulator,currval)=>accumulator+currval,0)

// console.log(mytotal)


const shoppingcart = [
    {
        item:"js course",
        price:5999
    },
    {
        item:"data science",
        price:455
    }
]


const cartval = shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(cartval)