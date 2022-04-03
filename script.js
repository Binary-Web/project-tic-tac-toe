
const board = document.querySelector('.board');
var boardWidth = board.offsetWidth;
board.style.height = `${boardWidth}px`;
const cells = document.querySelectorAll('.cell');

const modal = document.querySelector('.modal-container');
const playAgainButton = document.querySelector('.btn-playagain');

playAgainButton.addEventListener('click', () => game.gameReset());

const game = (() => {
    const player1 = '<span class="mdi mdi-close"></span>';
    const player2 = '<span class="mdi mdi-checkbox-blank-circle-outline"></span>';
    let turns = 0;
    
    let winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const gameReset = () => {
        winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        cells.forEach(cell => {
            cell.innerHTML = "";
            cell.style.pointerEvents = "all";
        });
        modal.style.display = "none"
        
    }

    const p1 = (cellNum, cellBlock) => {
        cellBlock.innerHTML = player1;
        gameMarker(cellNum, "x");
        cellBlock.style.pointerEvents = "none"
    }
    const p2 = (cellNum, cellBlock) => {
        cellBlock.innerHTML = player2
        gameMarker(cellNum, "o");
        cellBlock.style.pointerEvents = "none";
    }

    const gameStatus = () => {
        winningConditions.forEach(condition => {
            const arr = [...new Set(condition)]; //making a new array with now duplicate values
            if(arr.length == 1) {
                modal.style.display = "flex";
            }
        })
        if(turns === 8) {
            console.log("NO WINNERS")
            gameReset();
        }
    }

    const gameMarker = (cellNum, symbol) => {
        winningConditions.forEach(conditions => {
            conditions.forEach((cellNumber, index) => {
                if(cellNumber == cellNum) {
                    conditions[index] = symbol
                }
            })
        });
        gameStatus();
    }

    const playerMoves = (e) => {
        cellNum = e.target.dataset.cellNum;
        cellBlock = e.target;
        if(turns % 2 == 0) {
            p1(cellNum, cellBlock);
        } else if(turns % 2 == 1) {
            p2(cellNum, cellBlock);
        }
        turns++;
    }

    const declareWinner = (winner) => {
        alert(`Winner is ${winner}`);
    }
    return {
        playerMoves,
        gameReset
    }
})();


class Player {
    constructor(uname, playerTurn) {
        this.uname = uname;
        this.playerTurn = playerTurn
    }
}

;

cells.forEach(cell => {
    cell.style.height = `${boardWidth / 3}px`;
    cell.style.width = `${boardWidth / 3}px`;
    cell.addEventListener('click', game.playerMoves)
})

