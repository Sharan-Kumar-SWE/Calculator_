let calculation='';

function updateCalculation(value){
let result= calculation+=value
document.querySelector('.calculate-result').innerHTML=result
}

function isEqual(){
    calculation=eval(calculation)
    document.querySelector('.calculate-result').innerHTML=calculation;
}

function clearCalculation(){
    calculation=''
    document.querySelector('.calculate-result').innerHTML=calculation
   
}