// global variables here 
const DEFAULT_GRID_SIZE = 16;

// querySelector stuff goes here
const drawingBoard = document.querySelector('.drawing-board');

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            const col = document.createElement('div');
            col.classList.add('column');
            row.appendChild(col);
        }
        drawingBoard.appendChild(row);
    }
}

createGrid(DEFAULT_GRID_SIZE);