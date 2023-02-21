const login = document.getElementById("login");
const password = document.getElementById("password");
const email = document.getElementById("email");

login.addEventListener("input", () => {
    let loginVal = login.value;

    let regex = new RegExp("^[A-Z][a-z]+$")

    if (!regex.test(loginVal)){
        login.nextElementSibling.textContent ='Login failed!'
    }
    else {
        login.nextElementSibling.textContent = ''
    }
})

email.addEventListener('input', () =>{
    let mailValue = email.value

    let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")

    if (!regex.test(mailValue)){
        email.nextElementSibling.textContent ="email failed!"
    }
    else{
        email.nextElementSibling.textContent = ''
    }
})

password.addEventListener("input", () =>{
    let passwordValue = password.value

    let regex = new RegExp("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")

    if (!regex.test(passwordValue)) {
        password.nextSibling.textContent = "password failed!"
    }
    else{
        password.nextSibling.textContent = ''
    }
})