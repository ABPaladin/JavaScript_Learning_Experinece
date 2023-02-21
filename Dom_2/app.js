// getElementById("elementId")
// querySelector("#h1 .h1 h1")
// querySelectorAll("") 
// getElementByC;assName("text")
// getElementByTagName("h1")

// .textContent    
// .innerHTML 
// .styles.backgroundColor;
// .setAttribute("style", "backgroundColor:");

// input = document.getElementById("text");
// btn = document.getElementById("btn")
// ul = document.getElementById("list");

// document.getElementById("btn").addEventListener
// ("click",() => {
//     document.getElementById("list").innerHTML += 
//     `<li>${document.getElementById("text").value}</li>`
// });

// const input = document.getElementById("text");
// const btn = document.getElementById("btn"); 

// input.style.display = "none";

// document.getElementById("btn").addEventListener
// ("click",() => {
//     input.style.display = "inline-block";
// });

// input.addEventListener("click",() => {     
//     btn.style.display = "none";
// });

// document.getElementById("btnRed").addEventListener
// ("click",() => {
//     document.body.style.backgroundColor = "red";    
// });
// document.getElementById("btnBlue").addEventListener
// ("click",() => {
//     document.body.style.backgroundColor = "blue";
// });
// document.getElementById("btnGreen").addEventListener
// ("click",() => {
//     console.log("btnGreen")
//     document.body.style.backgroundColor = "green";
// });

let reviews = [
    "Cea mai formidabila cafenea din Botanica!",
    "Cafea la 3 lei! WOW!",
    "Personal amabil, fast-delivery! Boabe de cafea Arabica",
    "Mai ieftin ca Starbucks",
    "Nescafe odihaet"
]; 

const p = document.getElementById("review");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let reviewNumber = 0;

function changeReview()
{
    if (reviewNumber > reviews.length-1) { 
        reviewNumber = 0;
    }

    if (reviewNumber < 0) {
        reviewNumber = reviews.length-1;
    }
    p.textContent = reviews[reviewNumber];
}

changeReview();

next.addEventListener("click", () => {
    reviewNumber+=1;
    changeReview();
});

prev.addEventListener("click", () => {
    reviewNumber-=1;
    changeReview();
});
// const input = document.getElementById("input");
// const btn = document.querySelector("#btn");
// const content = document.getElementById("content");

// let tablou = [];

// btn.addEventListener("click", () => {
//     tablou.push(input.value);
//     showElements();
// });

// function showElements() {
//     content.innerHTML = "";
//     tablou.forEach(item => {
//         content.innerHTML += `<p>${item}</p>`;
//     })
// }