const clock = document.querySelector('.clock')

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date
}, 1000);