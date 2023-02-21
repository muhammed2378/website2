// get the links class
let links = document.querySelector(".links");

// get the lines class
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


// show on scrolling

// client
let client = document.querySelector(".client .container").children[0];
console.log(client)

// get the rect of the client element
let clientRect = client.getBoundingClientRect(); 
// console.log(clientRect)

// get the rect of the body element
let bodyRect = document.body.getBoundingClientRect();
// console.log(bodyRect)

window.addEventListener("scroll", () =>  {
    // the Y cooridnate of the window on scrolling
    let Y = window.scrollY;

    // get the Y cooridnate of the client
    let rect = (clientRect.top - bodyRect.top) - clientRect.height;

    console.log(rect)
    console.log(Y)
    if (Y > rect) {
        // make the client visible 
        client.style.opacity = "1";
        client.style.transition = "1s";
    }

})

// console.log("allah")

// scroll smoothly up

let span = document.querySelector(".up");


//  on scrolling show the arrow up when it passes 1000Y
window.onscroll = function () {
    let Yside = scrollY;
    if(Yside >= 1000) {
        span.classList.add("actv")
    }else{
        span.classList.remove("actv")
    }
}

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
