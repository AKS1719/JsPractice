const buttons = document.querySelectorAll('button')


const main = document.querySelector('.main')


buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        main.style.backgroundColor = button.id;
    })
})