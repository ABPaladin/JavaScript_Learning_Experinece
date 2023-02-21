const input = document.getElementById('input');
const out = document.getElementById('out');

function Value(){
let val = input.value;
out.innerHTML = val;
}


input.addEventListener('keydown', () => {
    Value();
});