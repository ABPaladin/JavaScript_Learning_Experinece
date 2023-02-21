const money = document.getElementById('money');
const nr = document.getElementById('nr');
const procent = document.getElementById('procent');
const calcul = document.getElementById('calcul');
const result = document.getElementById('result');

function Credit(calcul, value, lei) {
    let result = (value*3/100)/12;
    calcul.textContent = `${result} ${lei}`
}

procent.addEventListener("click" ,()=>{
    Credit(result,money.value,"lei")
})