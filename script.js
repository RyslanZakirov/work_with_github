console.log("Welcome.");

document.addEventListener("mousemove", event => {

    console.log("gg");
    console.log("boba");
    
});

document.addEventListener("click", event => {
    let p = document.createElement("p");
    p.style.color = "red";
    p.innerHTML = event.pageX;
    document.querySelector(".container").append(p);

});