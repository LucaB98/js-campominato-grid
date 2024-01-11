

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

const endGame = (score, bombs, revealFunction, hasWon = false) =>{
    const message = hasWon ? `Hai vinto!`: `Hai perso! hai totalizzato ${score} punti`;
    alert(message);
    
    revealFunction(bombs);
}

const revealAllCell = (bombs) => {
    const cells = document.querySelectorAll('.cell')
    for(let cell of cells){
        cell.classList.add('clicked');
        if(bombs.includes(parseInt(cell.innerText)));{
            cell.classList.add('bomb')
        }
    }
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
            const hasHitBomb = bombs.includes(i);
            if(hasHitBomb){
                endGame(score, bombs, revealAllCell, false)

            }else{
                scoreDisplay.innerText = ++score;

                if(score === maxPoint){
                   endGame(score, bombs, revealAllCell, true);

                };
            };
            
        });

        grid.appendChild(cell);
    };
});
