const category = document.getElementById('categorii');
const car = document.getElementById('car');
const phones = document.getElementById('phones');
const computers = document.getElementById('computer');

function showHide(){
    let con = document.getElementById("container");
    if (con.style.display === "none") {
      con.style.display = "block";
    } else {
      con.style.display = "none";
    }
  }
