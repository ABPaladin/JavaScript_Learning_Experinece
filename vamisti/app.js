// let v = ['a', 'a', 'a', 't', 't', 'm', 't', 'm']
// let st = 0

// for (let i = 0; i < v.length; i++) {
//     if (v[i] == 'a') {
//         st += 10
//     } else if (v[i] == 't') {
//         st += 5
//     } else if (v[i] == 'm') {
//         st += 3
//     }
// }

// console.log(st + "min")

// Masini

// masini = [
//     {
//         brand: "Mercedes",
//         model: "E Klasse",
//         volume: 2200,
//         price: 20000,
//         fuel: "Petrol",
//         year: 2014,
//     },
//     {
//         brand: "Toyota",
//         model: "Camry",
//         volume: 3500,
//         price: 25000,
//         fuel: "Hybrid",
//         year: 2019,  
//     }
// ]

// let devamareaMasini = []
// let sum = 0

// for (let i = 0; i < masini.length; i++) {
//     if (masini[i].year >= 2020 && masini[i].year <= 2023) {
//         sum += 1000
//     } else if (masini[i].year <= 2019 && masini[i].year >= 2010) {
//         sum += 5000
//     } else {
//         sum += 10000
//     }

//     if (masini[i].price >= 100000) {
//         sum += (masini[i].price * 50 / 100) * 20
//     } else {
//         sum += (masini[i].price * 10 / 100) * 20
//     }

//     devamareaMasini.push(sum)
//     sum = 0
// }

// console.log(devamareaMasini)


let parcare = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0]
let ocupat = []
let liber = []
for (let i = 0; i < parcare.length; i++) {
    if (parcare[i] == 1) {
        ocupat.push(parcare[i])
    }
    else {
        liber.push(parcare[i])
    }
}
console.log("Sunt masini parcate" +" "+ ocupat.length)
console.log("Sunt locuri libere" +" "+ liber.length)
console.log("Sunt locuri total" +" "+ parcare.length)

const container = document.querySelector("#container")

parcare.forEach(spot => {
    if (spot == 1) {
        container.innerHTML += `
            <div class="ocupat"></div>
        `
    }else {
        container.innerHTML += `
            <div class="liber"></div>
        `
    }
});