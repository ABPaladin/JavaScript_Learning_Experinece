// const movie = ["Thor","Titanic","Cars"]

// movie.filter(movie =>{
//     return movie.length > 4
// })

// console.log(movie);

// let gadgets = ["MacBook Pro 14", "iPad Pro", "iPhone 13 Pro",
// "Apple Watch series 7"];

// let gadgets2 = gadgets.filter(gadgets => gadgets === "MacBook Pro 14");
// console.log(gadgets2);

// const items = [
//     {
//         brand: "iPhone",
//         model: "13 Pro",
//         storage: "256GB",
//         color: "Black",
//         price: 1500
//     },
//     {
//         brand: "Samsung",
//         model: "Galaxy 22",
//         storage: "128GB",
//         color: "White",
//         price: 1499
//     },
//     {
//         brand: "Xiaomi",
//         modle: "Redmi Note 5",
//         storage: "64GB",
//         color: "Black",
//         price: 250
//     },
//     {
//         brand: "iPhone",
//         model: "iPhone 6 S",
//         storage: "64GB",
//         color: "White",
//         price: 150
//     }
// ];

// let iphones = items.filter(item => item.brand === "iPhone");
// console.log(iphones);

// let blackPhones = items.filter(item => item.color === "Black");
// console.log(blackPhones);

// let whitePhones = items.filter(item => item.color === "White");
// console.log(whitePhones);

// let expensivePhones = items.filter(item => item.price > 1000);
// console.log(expensivePhones);

// let storagePhones = items.filter(item => item.storage === "256GB");
// console.log(storagePhones);

// let sum = items.reduce((s,items) => s += items.price,0);
// console.log(sum);

// const numbers = [1,10,20,30,40,500];
// let sumNumbers = numbers.reduce((sum, numbers) => sum += numbers,0);
// console.log(sumNumbers);

// const prices = [32.12,99.99,10,1500,55.50,12.54];
// let sort = prices.sort((a,b) => {
//         return a - b;
// });
// console.log(sort);

// let pricesDSC = prices.sort((a,b)=> b - a);
// console.log(pricesDSC);

// const cars = [
//     {
//         brand: "BMW",
//         model: "X5",
//         price: 19500
//     },
//     {
//         brand: "Honda",
//         model: "Civic",
//         price: 14500
//     },
//     {
//         brand : "Mercedes Benz",
//         model : "Sprinter",
//         price : 10000
//     }
// ];

// let carsASC = cars.sort((a,b) => a.price - b.price);
// console.log(carsASC);

// let carsDSC = cars.sort((a,b) => b.price - a.price);
// console.log(carsDSC);

// let carsPrice = cars.filter(cars => cars.price < 20000);
// console.log(carsPrice);

// let carsSum = cars.reduce((s,cars)=> s += cars.price,0)
// console.log(carsSum);

const apartments = [
    {
        img: "https://images.unsplash.com/photo-1622866306950-81d17097d458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        rooms: 2,
        surface: 50,
        building: "novostroy",
        floor: 29,
        condition: "EURO",
        location: "Botanica",
        price: 65000 
    },
    {
        img: "https://mykaleidoscope.ru/uploads/posts/2021-10/1633714978_4-mykaleidoscope-ru-p-sovetskaya-kvartira-interer-interer-krasiv-4.jpg",
        rooms: 1,
        surface: 35,
        building: "hruschevka",
        floor: 4,
        condition: "kosmeticheskiy",
        location: "Buiucani",
        price: 40000
    },
    {
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
        rooms: 30,
        surface: 500,
        building: "villa house",
        floor: 4,
        condition: "nefinisat",
        location: "Rascani",
        price: 900000
    },
    {
        img: "https://images.unsplash.com/photo-1633694705199-bc1e0a87c97a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        rooms: 8,
        surface: 150,
        building: "Penthouse",
        floor: 20,
        condition: "luxury flat",
        location: "Rascani",
        price: 199000
    }
];

const input = document.getElementById("price");
const select = document.getElementById("locations");
const mainDiv = document.getElementById("apartments");
const btn = document.getElementById("reset");

function show(aps) {
    mainDiv.innerHTML = '';
    aps.forEach(ap => {
    mainDiv.innerHTML += `
        <div class='apartment'>
            <img src='${ap.img}'>
            <h1>${ap.location}</h1>
            <div>
            <span>${ap.rooms}</span>
            <span>${ap.surface}m<sup>2</sup></span>
            <span>${ap.building}</span>
            <span>${ap.floor}</span>
            <span>${ap.condition}</span>
            <span>${ap.location}</span>
            </div>
            <h3>&euro;${ap.price}</h3>
        </div>
        `;
    })
}

show(apartments);

select.addEventListener("change", () => {
    let ap2 = apartments.filter(ap => ap.location === select.value);
    show(ap2);
});

input.addEventListener("input", () => {
    let ap3 = apartments.filter(ap => ap.price <= input.value);
    show(ap3);
});

btn.addEventListener("click", () => {
    show(apartments);
});