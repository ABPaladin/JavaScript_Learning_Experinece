const message = document.getElementById('message');
const info = document.getElementById('info');

message.addEventListener('input', () => {
    let text = message.value
    // console.log(text.split(' '));
    info.textContent = `${text.split(' ').length}words`;
    if(text.split(' ').length >= 30){
        message.setAttribute("disabled", true);
    }});