

// PRENDO GLI ELEMENTI CHE MI SERVONO
const formElement = document.querySelector('form');
const grid = document.getElementById('grid');
const select = document.getElementById('select');
const scoreDisplay = document.getElementById('score');

// funzioni

const createCell = (content) => {
    const newCell = document.createElement('div');
    newCell.classList = 'cell'
    newCell.innerText = content;

    return newCell;
};

const generateBombs = (maxBombNumber, totalBombs) => {
    const bombs = [];
    while(bombs.length < totalBombs){
        const randomNumber = Math.floor(Math.random()* maxBombNumber) + 1;
        if(!bombs.includes(randomNumber)) bombs.push(randomNumber);
    }
    return bombs;
}





formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    grid.innerHTML = '';

    const level = select.value;

    let rows = 10;
    let cols = 10;

    switch(level){
        case 'difficile':
            rows = 7;
            cols = 7;
            break;
        case 'normale':
            rows = 9;
            cols = 9;
            break;    
    };

    const root = document.querySelector(':root');
    root.style.setProperty('--cols-per-row', cols);

    const totCell = rows * cols;

    let score = 0;
    scoreDisplay.innerText = score;

    const totalBombs = 16;
    const maxPoint = totCell - totalBombs;
    const bombs = generateBombs(totCell, totalBombs)


    for(let i = 1; i <= totCell; i++){

        const cell = createCell(i);

        cell.addEventListener('click', () => {

            if(cell.classList.contains('clicked')) return;
            const cellValue = cell.innerText;
            console.log('Valore della casella cliccata:', cellValue);
            

            cell.classList.add('clicked');
    
            scoreDisplay.innerText = ++score;
        });

        grid.appendChild(cell);
    };
});
