//GAMEBOARD MODULE
const gameBoard = (() => {
    const gameboard = 
    ['x', 'o', 'x',
     'o', 'x', 'o',
     'x', 'o', 'x']

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
    const board = document.querySelector('.board');
    for(let child of board.children) {
        child.innerHTML = gameBoard.gameboard[child.id]
    }


})()