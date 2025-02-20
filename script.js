// global variables here 
const DEFAULT_GRID_SIZE = 16;
const DEFAULT_USER_COLOR = "000000";

let currentTool = 'pencil';
let userColor = "";

const drawingBoard = document.querySelector('.drawing-board');

function createGrid(gridSize) {
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

// move to bottom?
createGrid(DEFAULT_GRID_SIZE);

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