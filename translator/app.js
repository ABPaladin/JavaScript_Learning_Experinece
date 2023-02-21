const ro = document.getElementById('ro');
const en = document.createElement('en');

ro.addEventListener('input', () => {
    switch (ro.value) {
        case 'masina':
            en.innerText = 'car'
            break
        case 'casa':
            en.innerText = 'house'    
                break
        case 'caine' :
            en.innerText = 'dog'
                break
        default :
                en.innerText = ''
    }
})