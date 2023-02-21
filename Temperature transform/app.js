const farenheit = document.getElementById('F');
const farenheitResult = document.getElementById('fahrenheitResult');
const kelvin = document.getElementById('K');
const kelvinResult = document.getElementById('kelvinResult');

function TempResult(type, value, transform, C) {
    let result = value - transform
    type.textContent = `${result} ${C}`
}

farenheit.addEventListener('input', () => { 
    TempResult(farenheitResult,farenheit.value,17.22,"C") 
})


kelvin.addEventListener('input', () => { 
    TempResult(kelvinResult,kelvin.value,272.15,"C") 
})