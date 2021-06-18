const board = document.querySelector('#board')
const SQUARES_NUMBER = 544


const colors = ['red','violet','pink','yellow', 'blue','violet','green','orange','aqua']

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',setColor)
     square.addEventListener('mouseleave', removeColor)
    board.append(square)
}

function setColor(e) {
    const element = e.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color} `
}

function removeColor(e) {
    const element = e.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    // const index = Math.floor(Math.random() * colors.length)
    return colors[Math.floor(Math.random() * colors.length)]
}
