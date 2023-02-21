//console.log(document.querySelector("h1"));
//const h1 = document.querySelector("h1");
//h1.style.color = "red";
// console.log(document.querySelector(".country span"));
// console.log(document.querySelector("#name"));
// console.log(document.querySelectorAll("h1"));
// console.log(document.getElementById("name"));
// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByClassName("country"));

// const title = document.getElementById("title");
//title.textContent += "OM - Apa de Gura Crainarului";
// title.innerHTML = "<em>Italia</em>"

// Dom si Bom
// alert("Salut")
// let age = confirm("Ai 18 ani?")
// let name = prompt("Introduce numele:")
// console.log(name)
// console.log(age)

// const msg = document.getElementById("message");
// const data = document.getElementById("data");

// let username = prompt("introduce numele:");
// let mature = confirm("Ai 18 ani?");
// let email = prompt("Introduce email:");
// let adress = prompt("Adress:");

// msg.textContent = `Salut, ${username}!`;
// if (mature) {
//     data.textContent = "Esti matur";
// }
// else{
//     data.textContent = "NU esti matur";
// }
// data.innerHTML += `<br>Email:${email}`;
// data.innerHTML += `<br>Adress:${adress}`;

// const numbers = [10, 20, 30, 40, 50, 60];
// console.log(numbers);

// for (let i = 0; i < numbers.length;i++){
//     console.log(numbers[i])
// }

// for (let i = 0; i < numbers.length;i++){
//     document.getElementById("data").innerHTML += `${numbers[i]} `;
// }

// const users = ["Sn0w","Mous5","Ken","M4ble","R4t"];
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);    
// }
// let j = 0;
// while (j < users.length){
//     console.log(users[j]);
//     j++;
// }

// users.forEach(function (user){
//     console.log(user)
// })

// users.push("Vl1");
// users.push("Badie");
// users.pop();
// users.shift();
// users.unshift("N1no");
// users.splice(2,3,"A","B","C","D","E");
// users.slice(0,2);
// console.log(users.slice(0,2));
// users.forEach(users => console.log(users));

// Crearea Tabloului

let arr = ["Bad","Salut","Mous","Ken","M4ble","R4t","M4ble","Ana","Maxim","Andrei"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr.forEach(arr => console.log(arr));

arr.push("Petru");
arr.shift();

arr.slice(0,1);
arr.splice(5,"Alexandru","Marina","Bogdan")

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

