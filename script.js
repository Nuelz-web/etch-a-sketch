const container = document.querySelector("#container");

let rainbowMode = false;

function createGrid(size) {
    
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseover", () => {
            if (rainbowMode) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else {
                square.style.backgroundColor = "black";
            }
        });

        container.appendChild(square);
    }
}

createGrid(16);

const button = document.querySelector("#new-grid-btn");

button.addEventListener("click", () => {
    let newSize = prompt("How many squares per side? Max 100");
    
   newSize = Number(newSize);

   if (newSize > 100 || newSize < 1 || isNaN(newSize)) {
    alert("Please enter a number between 1 and 100");
    return;
   }

   container.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
   container.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;

   createGrid(newSize);
   
   });

   const rainbowBtn = document.querySelector("#rainbow-btn");

   rainbowBtn.addEventListener("click", () => {
    rainbowMode = !rainbowMode;

    if (rainbowMode) {
        rainbowBtn.textContent = "Rainbow Mode: ON";
    } else {
        rainbowBtn.textContent = "Rainbow Mode: OFF";
    }
   });