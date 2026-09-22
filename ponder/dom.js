// select an html element from the DOM
let heading = document.querySelector("h1");

console.log(heading);

heading.style.color = "#ff0000"
heading.style.fontSize = "3em"
heading.style.textDecoration = "underline wavy"

// do everything in one line
document.querySelector("p").style.color = "blue";

// there are diffrent ways to select the DOM
document.getElementById("topics");

// you can select more than one element at a time
// returns a list of elements
console.log(document.querySelectorAll(".list"));

//apply a class to an element
let topicsclasslist =  document.querySelector("#topics").classList;
topicsclasslist.add("special");
topicsclasslist.toggle("special");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                