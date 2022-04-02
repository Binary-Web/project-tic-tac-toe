
const board = document.querySelector('.board');
var boardWidth = board.offsetWidth;
board.style.height = `${boardWidth}px`;

const GameBoard = (() => {
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

    let X = [];
    let O = [];

    const p1 = (cellNum, cellBlock) => {
        // <span class="mdi mdi-close"></span>
        cellBlock.innerHTML = player1;
        gameMarker(cellNum, "x");
    }
    const p2 = (cellNum, cellBlock) => {
        // <span class="mdi mdi-checkbox-blank-circle-outline"></span> 
        cellBlock.innerHTML = player2
        gameMarker(cellNum, "o");
    }

    const gameStatus = () => {
        winningConditions.forEach(condition => {
            const arr = [...new Set(condition)];
            if(arr.length == 1) {
                declareWinner(arr[0]);
            }
            console.log(arr)
        })
        console.log(winningConditions)
        
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

    const gameDraw = () => {
        //NO WINNERS
    }
    const playerMoves = (e) => {
        cellNum = e.target.dataset.cellNum;
        cellBlock = e.target;
        if(turns % 2 == 0) {
            p1(cellNum, cellBlock);
        } else if(turns % 2 == 1) {
            p2(cellNum, cellBlock);
        }
        console.log(turns)
        turns++;
    }

    const declareWinner = (winner) => {
        alert(`Winner is ${winner}`);
    }
    return {
        playerMoves
    }
})();


class Player {
    constructor(uname, playerTurn) {
        this.uname = uname;
        this.playerTurn = playerTurn
    }
}

;
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.style.height = `${boardWidth / 3}px`;
    cell.style.width = `${boardWidth / 3}px`;
    cell.addEventListener('click', GameBoard.playerMoves)
})

