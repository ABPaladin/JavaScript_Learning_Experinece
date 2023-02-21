const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');
const form = document.getElementById('form');
const close = document.getElementById('close');

hamburger.addEventListener('click', () => {
    // menu.classList.toggle("hideShow");

    if (menu.classList.contains("hideShow")) {
        hamburger.classList.add("active");
        menu.classList.remove("hideShow");
    }
    else {
        hamburger.classList.remove("active");
        menu.classList.add("hideShow");
    }
})

contact.addEventListener('click', () => {
    if (form.classList.contains("hideShow")) {
        form.classList.remove("hideShow");
    }
    else {
        form.classList.add("hideShow");
    }
});
close.addEventListener('click', () => {
    form.classList.add("hideShow");
});