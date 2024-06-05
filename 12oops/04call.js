
// from the following code the setusername cannot set the execution context of createuser
// because the setusername is not executed so we need to explicitly execute it using call
// function setUsername(username) {
//     this.username = username
// }

// function createUser(username,email,password){
//     setUsername(username)
//     this.email = email
//     this.password = password
// }


// const akshat = new createUser("akshat","akshatgoogle","pass")
// console.log(akshat)


function setUsername(username) {
    this.username = username
    console.log('called')
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}


const akshat = new createUser("akshat","akshatgoogle","pass")
console.log(akshat)


