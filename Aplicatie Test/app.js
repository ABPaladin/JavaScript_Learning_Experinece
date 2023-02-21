let questions = [
    {
        question: "Selectati capitala Republici Moldova",
        answers: {
            a: "Orhei",
            b: "Briceni",
            c: "Chisinau",
            d: "Londra"
        },
        correctAnswer: "Chisinau" 
    },
    {
        question: "Cel mai inalt varf din Moldova",
        answers: {
            a: "Ciocana",
            b: "Balanesti",
            c: "Balabanesti",
            d: "Balababanesti",
        },
        correctAnswer: "Balanesti"
    },
    {
        question: "Cel mai mare rau din Republica Moldova",
        answers: {
            a: "Nistru",
            b: "Prut",
            c: "Bac",
            d: "Raut",
        },
        correctAnswer: "Nistru"
    },
    {
        question: "Care este populatia Republici Moldova",
        answers: {
            a: "1 milion",
            b: "2 miiloane",
            c: "10",
            d: "2 miiloane 6 sute",
        },
        correctAnswer: "2 miiloane 6 sute"
    },
    {
        question: "Care este suprafata Republici Moldova",
        answers: {
            a: "33,856km",
            b: "43,185km",
            c: "159,412",
            d: "31,521",
        },
        correctAnswer: "33,856km"
    },
];

const question = document.getElementById("question");
const answers = document.getElementById("answer");
const next = document.getElementById("next");
let qNr = 0;
showQuestion(questions[0])
let corectQuestion = 0;
next.style.display = "none";
ShowBtn();

function ShowBtn () {
    document.getElementsByName("answer").forEach(input => {
        input.addEventListener("change", () => { next.style.display = "block"});
    });    
}
function showQuestion (q) {
    question.textContent = q.question;
    
    answers.innerHTML = ''
    for (let answer in q.answers){
        answers.innerHTML += `<input type='radio' name='answer' value='${q.answers[answer]}'> ${q.answers[answer]} <br>`;
    }
}

function verifyQuestion(q) {
    let answers = document.getElementsByName('answer')
    let userAnswer; 
    for (let answer of answers) {
        if (answer.checked){
            userAnswer = answer;
            console.log("selected answer");
        }
    } 
    if (userAnswer != undefined && userAnswer.value === q.correctAnswer) {
            corectQuestion += 1;
    } else {
        console.log("Chose an answer");
    }
}

function showResult () {
    question.textContent = `${corectQuestion}/${questions.length}`

    answers.innerHTML = '';

    next.style.display = 'none';
}
next.addEventListener("click", () => {
    qNr += 1 
    verifyQuestion(questions[qNr - 1])
    if (qNr >= questions.length){
        showResult()
    } else { 
        showQuestion(questions[qNr])
        next.style.display = 'none';
        ShowBtn()
    }
});