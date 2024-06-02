// for loop


for (let index = 0; index < 10; index++) {
    // console.log(index)
    if(index==5){
        // console.log("5 is the number")
    }
}

for (let index = 0; index < 5; index++) {
    for(let j = 0 ; j < 5 ; j++)
        {
            // console.log(`i ${index} j ${j}`)
        }
}

for (let i = 0; i < 11; i++) {
    // console.log(`4 * ${i} = ${4*i} `)
}

let array = ['flash','batman','superman']

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element)
}



/**
 *   break and continue
 */

for (let index = 1; index <= 20 ; index++) {
    
    if(index === 15)break;
    if(index === 5)continue;
    console.log(`Value of i is ${index}`)
    
}