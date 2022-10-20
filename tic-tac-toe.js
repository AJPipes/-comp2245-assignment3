let board = ['','','','','','','','','']
const combo = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]
const player_one = "X"
const player_two = "O"
let player = "X"
let gameOver = false

function winning(){
    let res = false
    combo.forEach(path => {
        if(
            player === board[path[0]]
            && board[path[0]] === board[path[1]] 
            && board[path[1]] === board[path[2]]
            ) res = true
    })
    return res
}

window.addEventListener('DOMContentLoaded', () => {
    const gameStatus = document.getElementById('status')
    const tiles = document.getElementById('board').children
    document.getElementsByClassName('btn')[0].onclick = (event)=>{
        gameOver = false
        gameStatus.classList.remove('you-won')
        gameStatus.innerHTML = 'Click a square to play an X or an O.'
        for( i = 0 ; i <tiles.length ; i++) tiles[i].innerHTML = '';
        board = ['','','','','','','','','']
    }
    for(i = 0 ; i < tiles.length ; i++){
        const tile = tiles[i]
        tile.classList.add('square')
        tile.id = `${i}`
        tile.addEventListener('click',(event)=>{
            const pointer = event.currentTarget.id
            if( board[pointer] === ''  && !gameOver) {
                const tile = document.getElementById(pointer)
                board[pointer] = player
                tile.classList.add(player)
                tile.innerHTML = player
                gameOver = winning()
                if( gameOver ) {
                    gameStatus.classList.add('you-won')
                    gameStatus.innerHTML = `Congratulations! ${player} is the Winner!`
                }
                if (player == 'X')
                    player = 'O'
                else
                    player = 'X'
            }
        })
        tile.addEventListener('mouseover',(event)=>{
            document.getElementById(event.currentTarget.id).classList.add('hover')
        })
        tile.addEventListener('mouseleave',(event)=>{
            document.getElementById(event.currentTarget.id).classList.remove('hover')
        })
    } 
})