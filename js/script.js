

// PRENDO GLI ELEMENTI CHE MI SERVONO
const formElement = document.querySelector('form');
const grid = document.getElementById('grid');

// funzioni

const createCell = (content) => {
    const newCell = document.createElement('div');
    newCell.classList = 'cell'
    newCell.innerText = content;
    return newCell;
};



const rows = 10;
const cols = 10;
const totCell = rows * cols;


formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    grid.innerHTML = '';


    for(let i = 1; i <= totCell; i++){

        const cell = createCell(i);

        cell.addEventListener('click', () => {

            const cellValue = cell.innerText;
            console.log('Valore della casella cliccata:', cellValue);
            
            cell.classList.toggle('clicked');
            
        });

        grid.appendChild(cell);
    };
});
