let faq = [
    {
        q: "Lorem ipsum dolor sit amet?",
        a: "Lorem ipsum dolor sit amet?"
    },
    {
        q: "Lorem ipsum dolor sit amet?",
        a: "Lorem ipsum dolor sit amet?"
    },
    {
        q: "Lorem ipsum dolor sit amet?",
        a: "Lorem ipsum dolor sit amet?"
    }
]

const con = document.getElementById("container")

faq.forEach((el) => {
    con.innerHTML +=`
    <div class="faq">
        <div class="question">${el.q}</div>
        <div class="answer">${el.a}</div>
    </div>`    
});

// let answers = document.getElementsByClassName("answer");
// console.log(answers);

//I
// let answer = document.getElementsByClassName("answer");
// let question = document.getElementsByClassName("question");
//II

let faqs = document.getElementsByClassName('faq')

Array.from(faqs).forEach(el =>{
    el.lastElementChild.style.display = 'none';

    el.addEventListener("click",() => {
        if(el.lastElementChild.style.display == 'none'){
            el.lastElementChild.style.display = 'block';
        }
        else{
            el.lastElementChild.style.display = 'none';
        }
    })
})