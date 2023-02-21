const count = document.getElementById('count');
const pluscount = document.getElementById('pluscount');
const minuscount = document.getElementById('minuscount');
let counter = 1
count.innerHTML = counter;
pluscount.addEventListener('click', () => {
    if (counter >= 0){{count.style.color = 'green';}}
        if (counter < 0){{count.style.color = 'red';}}
    counter += 1
    count.textContent = `${counter}`;
    count.style.color = 'green';
});

minuscount.addEventListener('click', () => {
    if (counter >= 0){{count.style.color = 'red';}}
    if (counter < 0){{count.style.color = 'green';}}
    counter -= 1
    count.textContent = `${counter}`;
});