
let calculation= JSON.parse(localStorage.getItem('calculated')) || '';
document.querySelector('.calculate-result').innerHTML=calculation;


function updateCalculation(value){
    let result= calculation+=value
    document.querySelector('.calculate-result').innerHTML=result
}

function isEqual(){
    calculation=eval(calculation)
    document.querySelector('.calculate-result').innerHTML=calculation;
    localStorage.setItem('calculated',JSON.stringify((calculation)))
}


function clearCalculation(){
    calculation=''
    document.querySelector('.calculate-result').innerHTML=calculation
    localStorage.removeItem('calculated')
    
}