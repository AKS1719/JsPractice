class User {
    constructor (username){
        this.username = username
    }
    logme(){
        console.log(`user name is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log('new course is added by '+ this.username)
    }
}

const mrteacher = new Teacher('akshat','gmail','1234')

mrteacher.addcourse()

const muser = new User('muser')
// muser.addcourse()
muser.logme()

console.log(mrteacher instanceof Teacher)
console.log(mrteacher instanceof User) //  teacher extends from user that's why return true