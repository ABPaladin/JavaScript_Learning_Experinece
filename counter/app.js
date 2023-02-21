const text = document.getElementById("text")
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
let count = 0;

minus.addEventListener('click',() => {
    count -= 1;
    text.innerHTML = count; 
});

plus.addEventListener('click',() => {
    count += 1;
    text.innerHTML = count;
});


