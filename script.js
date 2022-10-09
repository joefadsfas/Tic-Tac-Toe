//GAMEBOARD MODULE
const gameBoard = (() => {
    const gameboard = 
    ['', '', '',
     '', '', '',
     '', '', '']

    return {
        gameboard
    }
})();


//PLAYER FACTORY
const playerFactory = (name, mark, turn) => {
    return {name, mark, turn}
}


const player1 = playerFactory('Player 1', 'X', true)
const player2 = playerFactory('Player 2', 'O', false)

//FLOW CONTROL
const displayController = (() => {
    const board = document.querySelector('.board');
    const turnText = document.querySelector('#turn')
    //display the gameboard
    const display_gameboard = () => {for(let child of board.children) {
        child.innerHTML = gameBoard.gameboard[child.id]
    }}


    const checkWin = () => {
        const winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ]
        //x_amount = 0
        //o_amount = 0
        //for (let i of gameBoard.gameboard) {
        //    if (i == 'x') {
        //        x_amount += 1
        //    }
        //    else if (i == 'o') {
        //        o_amount += 1
        //    }
        //}
        //if (x_amount + o_amount == 9) {
        //    console.log("TIE")
        //}
    }


    //allow players to mark cells
    const playerMark = () => {
        for(let child of board.children) {
            child.addEventListener('click', () => {
                if (player1.turn === true) {
                    if (gameBoard.gameboard[child.id] != ''){
                        gameBoard.gameboard[child.id] != ''
                    }
                    else {
                        gameBoard.gameboard[child.id] = 'x'
                        display_gameboard()
                        player1.turn = false
                        player2.turn = true
                        turnText.innerHTML = 'Turn: Player 2'
                    }
                    
                }
                else if (player2.turn === true) {
                    if (gameBoard.gameboard[child.id] != ''){
                        gameBoard.gameboard[child.id] != ''
                    }
                    else {
                        gameBoard.gameboard[child.id] = 'o'
                        display_gameboard()
                        player1.turn = true
                        player2.turn = false
                        turnText.innerHTML = 'Turn: Player 1'
                    }
                    
                }
            })
        }
    }

    return {
        display_gameboard,
        playerMark,
        checkWin
    }
})();

displayController.display_gameboard()
displayController.playerMark()
displayController.checkWin()