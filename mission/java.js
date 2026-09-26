
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');
let wrap = document.getElementById("content");
const img = document.getElementById("logo");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        body.style.color = "white"
        body.style.backgroundColor = "#404040"
        wrap.style.backgroundColor = "#404040"
        wrap.style.borderColor = "lightgray"
        img.src = 'byui-logo-white.png';
    } else {
        // code for changes to colors and logo
        body.style.color = "black"
        body.style.backgroundColor = "white"
        wrap.style.backgroundColor = "white"
        wrap.style.borderColor = "darkgray"
        img.src = 'byui-logo-blue.webp';
    }
}           
                    