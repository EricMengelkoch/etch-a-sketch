function createGrid(width) {
    for (i = 0; i < width; i++) {
        let mid = document.createElement("div");
        mid.classList.add("middle");
        for (j = 0; j < width; j++) {
            let box = document.createElement("div");
            box.classList.add("colorful");
            mid.appendChild(box);
        }
        container.appendChild(mid);
    }
    let divs = document.querySelectorAll(".colorful");
    divs.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "red";
        })
    });
}

let container = document.querySelector(".container")



createGrid(16);