const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

red.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red'
});

green.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green'
});

blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue'
});