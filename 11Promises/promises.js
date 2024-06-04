const promise1 = new Promise((resolve, reject) => {
  // Do an async task
  // db calls, cryptography
  // network

  setTimeout(() => {
    console.log(`async task is complete`)
    resolve(); //  without this method then cannot be connected to resolve
  }, 1000);
});

promise1.then(() => {
  console.log("Promise consumed")
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 ");
    resolve();
  }, 1000);
}).then(() => {
  console.log('Async to resolve')
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({username:"akshat",email:"kumarsinhaakshat"})
  }, 1000);
});

promise3.then((response) => {
  console.log(response)
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "akshat", password: 234 });
    } else {
      reject("Error something went Wrong");
    }
  }, 2000);
});

promise4
  .then((response) => {
    console.log(response)
    return response.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promise5 = new Promise((resolve,reject)=>{
	setTimeout(() => {
		let error = true;
		if (!error) {
		  resolve({ username: "javscript", password: 234 });
		} else {
		  reject("Js went wrong Error something went Wrong");
		}
	  }, 2000);
})


async function consumePromise5(){
	// async function can not handle errors iteself like the promises .catch()
	try {
		const response = await promise5
		console.log(response)
	} catch (error) {
		console.log(error)
	}
}


consumePromise5()


// async function getAllUsers (){
// 	try {
// 		const response = await fetch("https://jsonplaceholder.typicode.com/users")
// 		const data = await response.json()
// 		console.log(data)
// 	} catch (error) {
// 		console.log("E: "+ error)
// 	}
// }

// getAllUsers()

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=> {
// 	return response.json()
// })
// .then((data)=> console.log(data))
// .catch((e)=> console.log(e))

fetch('https://api.github.com/users/AkshatKumarSinha9327')
.then((response)=> {
	return response.json()
})
.then((data)=> console.log(data))
.catch((e)=> console.log(e))
