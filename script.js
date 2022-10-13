//GAMEBOARD MODULE
const reset_gameboard = ['', '', '',
                         '', '', '',
                         '', '', '']

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
    let player1_winner = false
    let player2_winner = false
    const board = document.querySelector('.board');
    const turnText = document.querySelector('#turn')
    //display the gameboard
    const display_gameboard = () => {for(let child of board.children) {
        child.innerHTML = gameBoard.gameboard[child.id]
    }}


    const checkWin = () => {
        let takenfield_counter = 0
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
        winCombos.forEach((item) => { // [0, 1, 2, 3, 4, 5, 6, 7]
            if (gameBoard.gameboard[item[0]] === 'x' && gameBoard.gameboard[item[1]] === 'x' && gameBoard.gameboard[item[2]] === 'x') {
                turnText.innerHTML = 'PLAYER 1 WINS!'
                player1_winner = true;
            }
            
            else if (gameBoard.gameboard[item[0]] === 'o' && gameBoard.gameboard[item[1]] === 'o' && gameBoard.gameboard[item[2]] === 'o'){
                turnText.innerHTML = 'PLAYER 2 WINS!'
                player2_winner = true
            }
        })


        for (let i of gameBoard.gameboard) {
            if (i != '') {
                takenfield_counter += 1
            }
        }

        if (player1_winner === false && player2_winner === false && takenfield_counter === 9) {
            turnText.innerHTML = "IT'S A TIE!"
        }
    }


    const restartGame = () => {
        const restart_btn = document.querySelector('.restart-btn')

        restart_btn.addEventListener('click', () => {
            gameBoard.gameboard = ['', '', '',
                                   '', '', '',
                                   '', '', '']
            display_gameboard()
            player1_winner = false;
            player2_winner = false;
            player1.turn = true;
            turnText.innerHTML = 'Turn: Player1'
        })
    }


    //allow players to mark cells
    const playerMark = () => {
        for(let child of board.children) {
            child.addEventListener('click', () => {
                if (player1_winner === false && player2_winner === false){
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
                            checkWin()
                            restartGame()
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
                            checkWin()
                            restartGame()
                        }}

                    }
            })
        }
    }

    return {
        display_gameboard,
        playerMark,
        checkWin,
        restartGame
    }
})();

displayController.display_gameboard()
displayController.playerMark()
displayController.checkWin()
displayController.restartGame()