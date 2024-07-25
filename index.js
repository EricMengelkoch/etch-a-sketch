function createGrid(width) {
    let remover = document.querySelectorAll(".colorful");
    remover.forEach((div) => {
        div.remove()
    })
    remover = document.querySelectorAll(".middle");
    remover.forEach((div) => {
        div.remove()
    })
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

let newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", () => {
    createGrid(prompt("Enter a number between 1 and 100"))
});

createGrid(16);