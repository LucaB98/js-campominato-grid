

// PRENDO GLI ELEMENTI CHE MI SERVONO
const formElement = document.querySelector('form');
const grid = document.getElementById('grid');

// funzioni

const createCell = (number) => {
    const cell = document.createElement('div');
    cell.classList = 'cell'
    return;
};



const rows = 10
const cols = 10
const totCell = rows * cols

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    for(let i = 0; i < totCell; i++){
        const cell = createCell(i);
        grid.appendChild(cell);
    }
});