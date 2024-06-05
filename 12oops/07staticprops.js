class User{
    constructor (username){
        this.username = username
    }


    logme(){
        console.log(`${this.username}`)
    }

    static createID(){ // because of the static keyword it prevents the user to provide acess to the functionn
        return `123`
    }
}

const akshat = new User('akshat')

// console.log(akshat.createID())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone','gmail')
// console.log(iphone.createID())