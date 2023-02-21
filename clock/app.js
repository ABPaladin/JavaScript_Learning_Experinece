// console.log(data.getHours())
// console.log(data.getDay())
// console.log(data.getMinutes())
// console.log(data.getSeconds())

setInterval(() => {
    let data = new Date();
    let hours = data.getHours()
    let minuntes = data.getMinutes()
    let seconds = data.getSeconds()

document.getElementById("clock").innerHTML = `${hours}:${minuntes}:${seconds}`
}, 1000);
