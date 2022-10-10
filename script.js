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


const player1 = playerFactory('Player 1', 'x', true)
const player2 = playerFactory('Player 2', 'o', false)


//FLOW CONTROL
const displayController = (() => {
    let winner = false;
    let winner_name = 'x';
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
        winCombos.forEach((item, index) => { // [0, 1, 2, 3, 4, 5, 6, 7]
            if (gameBoard.gameboard[item[0]] === 'x' && gameBoard.gameboard[item[1]] === 'x' && gameBoard.gameboard[item[2]] === 'x') {
                console.log('player 1winner!');
                winner = true;
                winner_name = 'Player 1'
            }
            
            else if (gameBoard.gameboard[item[0]] === 'o' && gameBoard.gameboard[item[1]] === 'o' && gameBoard.gameboard[item[2]] === 'o'){
                console.log('Player 2 wins')
                winner = true
                winner_name = 'Player 2'
            }
            else {

            }

        })
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
                        checkWin()
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
                        checkWin()
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