const text = document.getElementById('text');
const textnum = document.getElementById('textnum');
const cm = document.getElementById('cm');
const km1 = document.getElementById('km1');
const km = document.getElementById('km');
const cm1 = document.getElementById('cm1');
const english = document.getElementById('english');
const romana = document.getElementById('romana');

text.addEventListener('input',()=>{
    let textn = text.value
    textnum.textContent = `${textn.split('').length}words`;
});

cm.addEventListener('input',()=>{
    km1.textContent = cm.value / 100000 +"km";
});

km.addEventListener('input',()=>{
    cm1.textContent = km.value * 100000 +"cm";
});

