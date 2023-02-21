const nume = document.getElementById('nume');
const numeDeFa = document.getElementById('nume-de-fam');
const patronimic = document.getElementById('patronimic');
const idnp = document.getElementById('idnp');
const email = document.getElementById('email');
const date = document.getElementById('date');
const facultate = document.getElementById('facultate');
const studii = document.getElementById('studii');
const nota = document.getElementById('nota');
const buttons = document.querySelector('buttons');

// Metoda Regex

nume.addEventListener('input', () => {
    let numeVal = nume.value
    
    let regex = new RegExp("^[A-Z][a-z]+$")

    if (!regex.test(numeVal)){
        nume.nextElementSibling.textContent ='Nume incorect'
    }
    else {
        nume.nextElementSibling.textContent = ''
    }
})

email.addEventListener('input', () =>{
    let mailValue = email.value

    let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")

    if (!regex.test(mailValue)){
        email.nextElementSibling.textContent ="email incorect"
    }
    else{
        email.nextElementSibling.textContent = ''
    }
})

nota.addEventListener('input', () =>{
    let notaVal = nota.value;

    let regex = new RegExp("^((([0-9]{1})(\.[0-9]+)?|10)$")

    if (!regex.test(notaVal)){
        nota.nextElementSibling.textContent = 'nota incorect'
    }
    else {
        nota.nextElementSibling.textContent = ''
    }
})




// Metoda If Else 

// let leters = ['q','w','e','r','s','t','y','u','i','o',
// 'p','a','s','d','f','g','h','j','k','l',
// 'z','x','c','v','b','n','m']

// let letersCapitals = ['Q','W','E','R','S','T','Y','U','I','O',
// 'P','A','S','D','F','G','H','J','K','L',
// 'Z','X','C','V','B','N','M']

// let numbers = ['0','1','2','3','4','5','6','7','8','9']

// let symbols = ['!','@','#','$','%','^','&','*','(',')'
// ,'-','=','_','+','[',']'];

// nume.addEventListener("input", () => checkNume(nume, "Nume"));
// numeDeFa.addEventListener("input", () => checkNume(numeDeFa, "Nume De familie"));
// patronimic.addEventListener("input", () => checkNume(patronimic, "Patronimic"))

// function checkNume(input, text) { 
// // console.log(nume.value.split('')) //abc => 1,2,3
//     let arr = input.value.split('')
//     let errors = false

//     if(!letersCapitals.includes(arr[0])){
//         input.nextElementSibling.textContent =text + ' trebuie sa inceapa cu litera mare'
//         return;
//     }

//     arr.forEach(a => {       
//     if(numbers.includes(a) || symbols.includes(a)) {
//         input.nextElementSibling.textContent =text + ' nu poate contine caractere sau cifre'
//         errors = true;
//     }
// })
//     if(!errors) input.nextElementSibling.textContent= '';
// }

// idnp.addEventListener('input', () => {
//     let idnpArr = idnp.value.split('')
//     let errors = false

//     idnpArr.forEach(a =>{
//         if (numbers.includes(a)){
//             idnp.nextElementSibling.textContent = 'IDNP incorect'
//             return;
//         }
//     })
//     if (idnpArr.length != 13){
//         idnp.nextElementSibling.textContent = 'IDNP incorect';
//     }else if (errors === false){
//         idnp.nextElementSibling.textContent = '';
//     }
// })