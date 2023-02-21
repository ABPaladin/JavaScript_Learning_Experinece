const open = document.getElementById('open');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
menu.style.display = 'none';
open.addEventListener('click',() => {
    menu.style.display = 'block';
});
close.addEventListener('click',() => {
    menu.style.display = 'none';
});

