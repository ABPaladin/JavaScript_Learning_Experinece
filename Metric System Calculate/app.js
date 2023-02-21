const miles = document.getElementById("miles");
const milesResult = document.getElementById("miles-result");
const feet = document.getElementById("feet");
const feetResult = document.getElementById("feet-result");
const inches = document.getElementById("inches");
const inchesResult = document.getElementById("inches-result");


function getResult(element, value, a, b){
    let result = value * a
    element.textContent = `${result} ${b}`;
}

miles.addEventListener("input", ()=>{ 
    getResult(milesResult,miles.value,1.0609,"km")  
});

feet.addEventListener("input", ()=>{ 
    getResult(feetResult,feet.value,0.304,"m")  
});

inches.addEventListener("input", ()=>{ 
    getResult(inchesResult,inches.value,2.54,"cm")  
});
