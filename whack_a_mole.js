const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const time = document.querySelectorAll('#time')
let score = document.querySelectorAll('#score')

let result = 0

function randomMole() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
}