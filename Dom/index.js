// const btn = document.getElementById("my-btn");

// btn.addEventListener('click', function() {
//     console.log("btn click");
// });    

// btn.addEventListener('dblclick', function() {
//     console.log("btn double click");
// });

// const counter = document.getElementById("counter");
// const add = document.getElementById("add");
// const subtract = document.getElementById("subtract");
// const reset = document.getElementById("reset");

// let a = 0;

// function setCounter() {
//     counter.textContent = `${a}`;
//     if (a >0){
//         counter.style.color = "green";
//     }
//     else if (a === 0){
//         counter.style.color = "black";
//     }
//     else {counter.style.color = "red";}
// }

// add.addEventListener('click', function() {
//     a += 1;
//     setCounter();
// });

// subtract.addEventListener('click', function() { 
//     a -= 1;
//     setCounter();
// });

// reset.addEventListener('click', function() {
//     a = 0;
//     setCounter();
// });

// const body = document.querySelector("body");
// const btn = document.getElementById("modebtn");

// btn.addEventListener('click', function() {
//     if (body.classList.contains("light")){
//         body.classList.remove("light");
//         body.classList.add("dark");
//     }
//     else{
//         body.classList.remove("dark");
//         body.classList.add("light");
//     }
// });

// const body = document.querySelector("body");

// let colors = ["pink", "violet","purple","red","lime","green","orange"
// ,"blue","lightblue","yellow","magenta","aquamarin"];

// setInterval(function() {
//     let rand = Math.round((Math.random() * colors.length));
//     body.style.backgroundColor = colors[rand];
// }, 100);

// Calculator

// const input = document.getElementById("value");
// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const equal = document.getElementById("equal");
// const multiple = document.getElementById("multiple");
// const devide = document.getElementById("devide");

// let value = 0;
// let a = 0;
// let b = 0;
// let operator;

// function calcuate(operator){
// switch(operator){
//     case "+":
//         input.value = Number(a+b);
//         break;
//     case "-" :
//         input.value = Number(a-b);
//         break;
//     case "*" :
//         input.value = Number(a*b);
//         break;
//     case "/" :
//         input.value = Number(a/b);
//         break;
//     }
// }

// plus.addEventListener('click', function() {
//     a = Number(input.value);
//     operator = "+";
//     input.value = "";
// });

// minus.addEventListener('click', function() {
//     a = Number(input.value);
//     operator = "-";
//     input.value = "";
// });

// multiple.addEventListener('click', function() {
//     a = Number(input.value);
//     operator = "*";
//     input.value = "";
// });

// devide.addEventListener('click', function() {
//     a = Number(input.value);
//     operator = "/";
//     input.value = "";
// });

// equal.addEventListener('click', function() {
//     b = Number(input.value);
//     calcuate(operator);
//     operator = "=";
// });


const body = document.querySelector('body');
const changeP = document.getElementById('p');
const nume = document.getElementById ('Nume');
const prenume = document.getElementById ('Prenume');
const confirm = document.getElementById ('acc');
const green = document.getElementById ('colorGreen');
const data = document.getElementById ('data');

changeP.addEventListener('click', function() {
    let p = document.querySelector('p')
    p.innerHTML = "bye";
});

let a = 0;
let b = 0;

confirm.addEventListener('click', function() {
    data.innerHTML = `Name:${nume.value}<br>Prenume:${prenume.value}`;    
});


green.addEventListener('click', function() {
    body.style.backgroundColor = "green";
});