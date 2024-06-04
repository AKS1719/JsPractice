// const calculate = document.querySelector('#calculate')
const form = document.querySelector('.main form')
console.log(form)
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("result");
    
    if(height==='' || height < 0 || isNaN(height)){
        result.innerHTML = "Please give a valid height"
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = bmi;
    }

})