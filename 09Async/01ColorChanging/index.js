// random color generation

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color+= hex[Math.floor(Math.random()* 16) ]
    }
    return color
}
// console.log(randomColor())
let intervalId
const startChangingColor= function(){
    if(!intervalId)
    intervalId = setInterval(changeColor, 1000);

    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
    
}

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null // we are flushing the value of interval id  so that we cannot override it
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)