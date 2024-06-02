// Dates

let mydate = new Date()

// console.log(mydate)
// console.log(mydate.toString()) 
// console.log(mydate.toDateString()) // gives date string
// console.log(mydate.toISOString()) // gices isostring
// console.log(mydate.toLocaleDateString()) //  gives date
// console.log(mydate.toLocaleString()) //  gives date and time

// console.log(typeof mydate)

                        //  year,month (0,11),date
let mycreatedDate = new Date(2023,11,23)
// console.log(mycreatedDate)

// console.log(Math.floor(Date.now()/1000))


let newdata = new Date();
// console.log(newdata)
// console.log(newdata.getMonth())
// console.log(newdata.getDate())
// console.log(newdata.getDay())
// console.log(newdata.getFullYear())


newdata.toLocaleString('default',{
    weekday:"long",
})