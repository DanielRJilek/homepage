const airplane = document.getElementById("airplane");

function fly() {
    if (airplane.classList.contains("boston")) {
        airplane.classList.remove("boston");
        airplane.classList.add("texas");
        return;
    }
    else {
        airplane.classList.remove("texas");
        airplane.classList.add("boston");
    }
    
}

airplane.addEventListener("click", fly);