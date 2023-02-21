
let reviews = [
    "1.Daca fericirea ta depinde de ceva ce face altcineva, atunci chiar ai o problema. (Richard Bach)",
    "2.Televizorul este guma de mestecat pentru ochi. (Frank Lloyd Wright)",
    "3.Pot rezuma in doua cuvinte tot ce am invatat despre viata: merge inainte. (Robert Frost)",
    "4.Nimic nu valoreaza mai mult decat ziua de azi. (Goethe)",
    "5.Nu-mi place de acel om. Trebuie sa-l cunosc mai bine. (Abraham Lincoln)",
    "6.Nu poti trai o zi perfecta fara sa faci ceva pentru cineva care nu te va putea rasplati niciodata. (John Wooden)",
    "7.A avea un prieten este mai vital decat a avea un inger. (Nichita Stanescu)",
    "8.Fa trei preziceri corecte, consecutiv si vei fi considerat un expert. (Legea lui Murphy)",
    "9.Imposibilul poate fi impartit oricand in posibilitati. (Autor necunoscut)",
    "10.Viata este ceva ce faci cand nu te poti duce la culcare. (Fran Lebowitz)"
]; 

const p = document.getElementById("review");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let reviewNumber = 0;

function changeReview()
{
    if (reviewNumber > reviews.length-1) { 
        reviewNumber = 0;
    }

    if (reviewNumber < 0) {
        reviewNumber = reviews.length-1;
    }
    p.textContent = reviews[reviewNumber];
}

changeReview();

next.addEventListener("click", () => {
    reviewNumber+=1;
    changeReview();
});

prev.addEventListener("click", () => {
    reviewNumber-=1;
    changeReview();
});

const rand = document.getElementById("random");
rand.addEventListener("click", () => {
document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 10);});
