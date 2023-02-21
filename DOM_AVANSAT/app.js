// const login = document.getElementById('login');

// login.addEventListener('keyup', () => {
//     console.log(login.value);
// });

// const title = document.getElementById('title');

// title.addEventListener('change', () => {
//     console.log(title.value);
// });

const bgColor = document.getElementById('bgColor');

bgColor.addEventListener('change', () => {
    document.body.style.backgroundColor = bgColor.value;
});

const txtcolor = document.getElementById('textColor');

txtcolor.addEventListener('change', () => {
    document.body.style.color = txtcolor.value;
});

const fontChange = document.getElementById('font');

fontChange.addEventListener('change', () => {
    document.body.style.fontFamily = fontChange.value
});

const HSize = document.getElementById('Hsize');
const hSizeText = document.getElementById('textColor');

HSize.addEventListener('change', () => {
    hSizeText.textContent = Hsize.value;
    console.log(Hsize.value);
    document.querySelector("h1").style.fontSize = Hsize.value+"px";
});

const Psize = document.getElementById('Psize');
const PsizeText = document.getElementById('PsizeText');

Psize.addEventListener('change', () => {
    PsizeText.textContent = Psize.value;
    console.log(Psize.value);
    document.querySelector("p").style.fontSize = Psize.value+"px";
});

const Htext = document.getElementById('Htext');
Htext.addEventListener('keyup', () => {
    document.querySelector("h1").textContent = Htext.value;
});

const Ptext = document.getElementById('Ptext');
Ptext.addEventListener('keyup', () => {
    document.querySelector("p").textContent = Ptext.value;
});

console.log();