function getImage(){
    // fetch API
fetch ("https://random.dog/woof.json")
    .then(response => response.json()) // JSON 
    .then(obj => img.src = obj.url)

}
const img = document.getElementById('image');
const btn = document.getElementById('btn');

btn.addEventListener('click', getImage)

setInterval(getImage, 5000);
