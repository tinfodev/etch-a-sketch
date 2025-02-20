// global variables here 
const DEFAULT_GRID_SIZE = 16;
const DEFAULT_USER_COLOR = "000000";

let currentTool = 'pencil';
let userColor = "";
let userGridSize = 16;

function createGrid(gridSize) {
    const drawingBoard = document.querySelector('.drawing-board');
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            const col = document.createElement('div');
            col.classList.add('column');
            col.setAttribute('data-opacity', 0);
            row.appendChild(col);
        }
        drawingBoard.appendChild(row);
    }
}

createGrid(DEFAULT_GRID_SIZE);

function addEventListenerToGrid() {
    const grids = Array.from(document.querySelectorAll('.column'));
    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mouseover', (evt) => {
            if (currentTool === 'eraser') return;
    
            const currentElement = evt.target;
    
            let currentOpacity = Number(currentElement.getAttribute('data-opacity'));
            const incrementOpacity = currentOpacity <= 1 ? currentOpacity += 0.1 : currentOpacity;
            currentElement.style.opacity = `${incrementOpacity}`;
            currentElement.setAttribute('data-opacity', incrementOpacity);
        })
    }
}

addEventListenerToGrid();

function removeGrid(gridSize = userGridSize) {

    const drawingBoard = document.querySelector('.drawing-board');
    drawingBoard.remove();

    const drawingArea = document.querySelector('.drawing-area');
    const newDrawingBoard = document.createElement('div');
    newDrawingBoard.classList.add('drawing-board');
    drawingArea.appendChild(newDrawingBoard);

    createGrid(gridSize);
    addEventListenerToGrid();
}

function handleBoardReset() {
    userGridSize = prompt("Select a grid size between 1-100:", 16);
    if (userGridSize >= 1 && userGridSize <= 100) {
        removeGrid(userGridSize);
    } else {
        alert("Invalid input. Try again.");
    }
}

// next: eraser tool, event listeners to select them with keyboards OR clicking their
// respective icon, toggle rainbow vs. regular (the color selector)
// clicking the color selector changes it to rainbow and vice versa

// select eraser event listener here

// select pencil event listener here
