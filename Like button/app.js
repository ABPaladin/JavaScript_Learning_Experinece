const likes = document.getElementById('likes');
const likebtn = document.getElementById('likebtn');
let likecounter = 500;
likes.innerHTML = likecounter;
let liked = false;

likebtn.addEventListener('click',() => {
    if (liked == false) {
        likecounter += 1;
        liked = true;
}       
    else {
        likecounter -= 1;
        liked = false;
}

    likes.textContent = `likes: ${likecounter}`;
});

