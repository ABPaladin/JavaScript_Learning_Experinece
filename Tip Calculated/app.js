const cash = document.getElementById('cash');
const btn5p = document.getElementById('5p'); 
const btn15p = document.getElementById('15p');
const btn25p = document.getElementById('25p');
const result = document.getElementById('result');

function getResult(amount,percentage) {
 let tip = (amount * percentage) / 100
 let sum = Number(amount) + tip
 result.innerHTML =`${amount} + ${tip} = ${sum} `
}

btn5p.addEventListener('click', () => {
    getResult(cash.value, 5)
})

btn15p.addEventListener('click', () => {
    getResult(cash.value, 15)
})

btn25p.addEventListener('click', () => {
    getResult(cash.value, 25)
})