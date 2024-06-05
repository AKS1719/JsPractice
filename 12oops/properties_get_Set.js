function User(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email
        },
        set:function(value){
            this._email =value
        }
    })
}




const chai = new User("chai@chai.com","chia")
console.log(chai.email)