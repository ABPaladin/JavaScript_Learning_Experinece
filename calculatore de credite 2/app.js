const sum = document.getElementById('sum')
const month = document.getElementById('month')
const result = document.getElementById('result')

function Calculate(totalsum, numMonths) {
    //5%
    let percentvalue = totalsum*5/100 
    let permonth = (totalsum+percentvalue)/numMonths

    result.textContent = `${permonth}` 
}

let s = 0; //suma
let m = 0; //luni

sum.addEventListener("input",()=>{
    s = Number(sum.value)

    Calculate(s,m)
})

month.addEventListener("input",()=>{
    m = Number(month.value)

    Calculate(s,m)
})
