// get the links 
let links = document.querySelector(".links");

// get the lines 
let lines = document.querySelector(".lines");

// get the first element of lines which is "ul"
let ul = links.childNodes[1];

// get all the li's so we can modify them all at once
let li = document.querySelectorAll(".ulA li"); 


lines.onclick = () => {
    // show the links and hide the links by using the event
    links.classList.toggle("hide");
    ul.classList.add("column");
    li.forEach((e) => {
        e.classList.add("reformat");
    })
}


// show onscroll

let client = document.querySelector(".client .container");



let clientRect = client.getBoundingClientRect();
let bodyRect = document.body.getBoundingClientRect();



window.onscroll = function () {
    let Y = window.scrollY;
    let rect = clientRect.top - bodyRect.top;
    if (Y > rect - 300) {
        client.style.visibility = "visible";
        client.style.opacity = "1";
    }

}


