const coding = [1,2,3]

coding.forEach((element)=>{
    // console.log(element)
})
coding.forEach(function (element){
    // console.log(element)
})


function printme(item){
    console.log(item)
}
// coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

const myCoding =[
    {
        name:"akshat",
        code:"java"
    },
    {
        name:"kumar",
        code:"cpp"
    },
    {
        name:"sinha",
        code:"tpp"
    }
]


myCoding.forEach((item)=>{
    console.log(item.name)
})
