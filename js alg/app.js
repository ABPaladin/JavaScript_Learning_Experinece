// const container = document.getElementById('container');
// const row = document.getElementById('row');

//first container 
const date = document.getElementById('date');
const dolarInmdl = document.getElementById('dolar-in-mdl');
const euroInmdl = document.getElementById('euro-in-mdl');
const rubInmdl = document.getElementById('rub-in-mdl');
const ronInmdl = document.getElementById('ron-in-mdl');
const poundsInmdl = document.getElementById('pounds-in-mdl');
// Calculator constants
const firstinput = document.getElementById('firstinput');
const secondinput = document.getElementById('secondinput');
const selectValute2 = document.getElementById('selectValute2');
const selectValute1 = document.getElementById('selectValute1');
// category btn filtre
const category = document.getElementById('category');
const btnActive = document.getElementById('btnActive');
const btnCar = document.getElementById('btnCar');
const btnComp = document.getElementById('btnComp');
const btnClothes = document.getElementById('btnClothes');
const btnPhones = document.getElementById('btnPhones');

// filtrare price
const priceIn = document.getElementById('price-input'); 
const inmin = document.getElementById('input-min');
const inmax = document.getElementById('input-max');
const slider = document.getElementById('slider');
const progress = document.getElementById('progress');
const rangein = document.getElementById('range-input');
const rangemin = document.getElementById('range-min');
const rangemax = document.getElementById('range-max');

const categoryrow = document.getElementById('categoryRow');
const myBtnContainer = document.getElementById('myBtnContainer');

// functie pentru prima tablita 
function getValueDolarInMDL(valuta,element) {
    fetch (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${valuta}.json`)
    .then (res => res.json())
    .then (data => {

    value = data[valuta]
    
    date.textContent = data.date;
    element.textContent = value.mdl*100+"mdl"
    })
}

getValueDolarInMDL("usd",dolarInmdl)
getValueDolarInMDL("eur",euroInmdl)
getValueDolarInMDL("rub",rubInmdl)
getValueDolarInMDL("ron",ronInmdl)
getValueDolarInMDL("gbp",poundsInmdl)

let valuta1 = "eur";
let valuta2 = "mdl";

selectValute1.addEventListener("change",() => {
    valuta1 = selectValute1.value;
    console.log(valuta1)
})


selectValute2.addEventListener("change",() => {
    valuta2 = selectValute2.value;
    console.log(valuta2)
})

function valutaCalc(input1,input2,select1,select2){
    fetch (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${select1}.json`)
    .then (res => res.json())
    .then (data => {
    let result = input1.value * data[select1][select2]
    input2.value = result    
}
)}

selectValute1.addEventListener("input",()=>{
    valutaCalc(firstinput,secondinput,valuta1,valuta2)
})

selectValute2.addEventListener("input",()=>{
    valutaCalc(firstinput,secondinput,valuta2,valuta1)
})

