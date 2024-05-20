// const tinderUser = new Object() // singleton object

const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "aks"
tinderUser.isLoggedIN =  false
// console.log(tinderUser)

const regularUser = {
    email:"akshatgmailcom",
    fullname:{
        userFullName:{
            firstname :"akshat",
            lastname :"sinha"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname)


const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}
const obj4 = {5:'a',6:'b'}

const obj = {obj1,obj2};
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3)

const arr = [
    {
        id:1,
        name:'change'
    },
    {
        id:1,
        name:'change'
    },
    {
        id:1,
        name:'change'
    },
    {
        id:1,
        name:'change'
    },
    {
        id:1,
        name:'change'
    }
]

// console.log(arr[1])

console.log(tinderUser)
console.log(Object.keys(tinderUser)) //return array data
console.log(Object.values(tinderUser)) //return app data
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLoggedIN'))