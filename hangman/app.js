const game = document.querySelector(".game");
const word = document.querySelector(".word");
const rounds = document.querySelector(".rounds");

const letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
let guesses = ['elephant','laptop','eminescu','rain','bodybuilder']
let guess = guesses[Math.floor(Math.random() * guesses.length)]
let gameArr = []
let tries = 0

for (let i = 0; i < guess.length; i++) gameArr[i] = ''

function gameFun(letter){

    if (!guess.split("").includes(letter)){
        tries +=1
        rounds.textContent = `${tries}/10`
        return;
    }

    for (let i = 0; i < letters.length; i++){
        if (guess[i] === letter) {
            gameArr[i] = letter
        }
    } 

    if (guess === gameArr.join('')){
        game.innerHTML = 'You won the game, press F5'
    }

    console.log(gameArr)
    word.innerHTML = ''
    gameArr.forEach(letter =>{
        word.innerHTML += `<button>${letter}</button>`
    })
}

letters.forEach(letter => {
    game.innerHTML += `
    <button class='letter-btn'>${letter}</button>
    `
})

document.querySelectorAll(".letter-btn").forEach(btn => {
    btn.addEventListener("click", () =>{
        let letter = btn.textContent
        console.log(letter)
        btn.style.display = "none"
        gameFun(letter)
        if (tries > 10) {
            game.innerHTML = ''
        }
    });
})
