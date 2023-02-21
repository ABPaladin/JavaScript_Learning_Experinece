const input = document.getElementById('input')
const out = document.getElementById('out')

let d = [
{
    'ro': 'iubire',
    'en': 'love'
},
{
    'ro': 'masina',
    'en': 'car',
},
{
    'ro': 'casa',
    'en': 'house',
}]

 
let search;
input.addEventListener('input', () => {    
    search = input.value
    out.textContent = d.filter(en => en.ro === search)[0].en
})


