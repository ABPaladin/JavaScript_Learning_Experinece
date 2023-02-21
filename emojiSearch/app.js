const searchin = document.getElementById('searchin');
const emojiout = document.getElementById('emojiout');
const d = [
    {
        'name': 'love',
        'emoji': '❤'
    },
    {
        'name': 'car',
        'emoji': '🚗',
    },
    {
        'name': 'house',
        'emoji': '🏠',
    }
]


// emojiout.innerHTML = 
searchin.addEventListener('input', () => {  
    search = searchin.value  
    emojiout.textContent = d.filter(em => em.name === search)[0].emoji
})