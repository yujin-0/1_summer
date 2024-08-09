const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const time = document.querySelector('#time')
let score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 30
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result += 1
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 650)
}

moveMole()

function countDown() {
    currentTime--
    time.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! 나의 점수는 ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)