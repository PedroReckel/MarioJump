const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.clouds')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)

    // Esse 'loop' vai ficar verificando se o jogador perdeu ou não
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft // Pegar a posição do tubo na esquerda
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') // Pegar a posição do botton
    const CloudPosition = cloud.offsetLeft // Pegar posição da nuvem na direita

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        cloud.style.animation = 'none'
        cloud.style.left = `${CloudPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)