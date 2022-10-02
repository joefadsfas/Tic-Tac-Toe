//GAMEBOARD MODULE
const gameBoard = (() => {
    const gameboard = ['', '', '', '', '', '', '', '', '']
    return {
        gameboard
    }
})();


//PLAYER FACTORY
const playerFactory = (name, mark, turn) => {
    return {name, mark, turn}
}

const player1 = playerFactory('Player 1', 'X', true)
const player2 = playerFactory('Player 2', 'Y', false)

//FLOW CONTROL
const displayController = (() => {
    


})()