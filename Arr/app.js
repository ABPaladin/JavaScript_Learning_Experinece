// let a = [1,2,3];
// a = [1,1,1];
// const b = [7,8,9];
// b[2] = 10;
// // b = [1,2,3];
// b.push("a");

// console.log(a);

// const arr = [1,200,3000,40000];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item){
//     console.log(item);
// });

// const cars = ["Dacia","Renault","Suzuki"];

// for (let i = 0; i < cars.length; i++) {
//     console.log(i + ""+cars[i]);
// }

// cars.forEach((car,i)=>{
//     console.log(i+""+car);
// });

// let phones = ["Apple","Samsung","Xiaomi","Android"];

// let myPhones = phones.map((phone,i)=>{
//     return "iPhone";
// });
// console.log(myPhones);

// let people = [
//     {
//         name: "Andrei",
//         salary: 900
//     },
//     {
//         name: "Marcel",
//         salary: 1300
//     }
// ];
// people=people.map((person)=>{
//     if(person.salary>1000){
//        return {...person, salary: person.salary + 100};
//     }else{
//         return {...person, salary: person.salary + 50};
//     }
// });

// console.log(people);


// let elevi = ["Alexandru","Maria","Ana","Marcel"];

// for (let i = 0; i < elevi.length; i++) {
//     console.log(elevi[i]);
// }

// let num = [10,56,28,45,62,94,12,35,67,82];

// num = num.map(x => {
//         if(x %2 === 0){
//             return x + 10;
//         }
//         else{
//             return x - 20;
//         }
//     })
// console.log(num);

// let b = [55,56,45,80,93,76,41]

// b = b.map(n => {
//     if(n % 5 === 0){
//         return n *5;
//     }else{
//         return n;
//     }
// })

// console.log(b);

// let c = [25,60,5,4,9,89,60,10,53];

// c = c.map(n => {
//     if(n > 10){
//         return n *= 100}
//     else if (n < 10){
//         return n /= 5;
//     }
//     else{ return n -= 5}
// })

// console.log(c)

// let garage = [
//     {
//         car: "Porsche 911 992",
//         horsePower: 650
//     },
//     {
//         car: "Lamborhini Huracan",
//         horsePower: 700
//     },
//     {
//         car: "BMW M5",
//         horsePower: 1000
//     }
// ];

// function addHorsePower(carName){
//     garage = garage.map((car)=>{
//         if(car.car ===carName){
//             return {...car, horsePower: car.horsePower + 50};
//         }else{
//             return car;
//         }
//     }) 
//     console.log(garage);
// }

// addHorsePower("Porsche 911 992");
// addHorsePower("BMW M5");


// let magazin = [
//     {
//         name: "Banana",
//         price: 13  // 13-(13*10/100) return{...obj, price: obj.price - (obj.price * 10 /100)}
//     },
//     {
//         name: "Carnat",
//         price:75
//     },
//     {
//         name: "Guma",
//         price:7
//     }
// ]

//     magazin = magazin.map((price)=>{
//         return{...price, price: price.price - (price.price * 10 /100)}
//     })
// console.log(magazin)

let maximum = [
    {
        name: "Iphone",
        price: 1500
    },
    {
        name: "Asus-Laptop",
        price: 2000
    },
    {
        name: "Gamepad",
        price: 150
    },
    {
        name: "Provodnic",
        price:100
    }
];

maximum = maximum.map((price)=>{
    if(price > 200){
        return{...price, price: price.price + (price.price * 20 / 100)+1500}
    }
    else{
        return{...price, price: price.price + 1500}
}
})

console.log(maximum)