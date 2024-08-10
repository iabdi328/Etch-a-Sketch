const container = document.querySelector('.container');

// Create a 16x16 grid of square divs
for (let i = 0; i < 256; i++) { 
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

// Change square color on mouseover
container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = "black";
    }
});

// Reset button functionality
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = "";
    });
});
