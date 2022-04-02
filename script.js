const board = (() => {
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

    const xTurn = (cellNum) => {

    }
    const oTurn = (cellNum) => {

    }

    const gameStatus = () => {
        winningConditions.forEach(condition => {
            const arr = new Set(condition);
            if(arr.length == 1) {
                //we got a winner
            }
        })
    }
})();


const handleClick = (e) => {
    // click event
    console.log(e.target.dataset.cellNum);
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('click', handleClick)
})