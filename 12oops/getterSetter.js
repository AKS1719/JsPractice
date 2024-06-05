class User{
    constructor (email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(email){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()+'askshat'
    }
    set password(password){
        // this.password = password // wrong way of setter
        this._password = password
    }


}

const akshat = new User("akshst@gmail","abc")

console.log(akshat.password)