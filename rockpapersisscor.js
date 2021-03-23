let computerMove
let playerMove 
let playerScore = 0
let computerScore = 0


//selects player's choice
const rock = document.querySelector('.rockImage')
rock.addEventListener('click', () => {
    playerMove = 'rock' 
    round()
})

const paper = document.querySelector('.paperImage')
paper.addEventListener('click', () => {
    playerMove = 'paper'
    round()
})

const sisscor = document.querySelector('.sisscorImage')
sisscor.addEventListener('click', () => {
    playerMove = 'sisscor'
    round()
})



//randomly selects computer's choice
function computerChoice() {
    const number = Math.floor(Math.random() * 3)
    if (number == 0) {
        return 'rock'
    } else if (number == 1) {
        return 'paper'
    } else {
        return 'sisscor'
    }
    
}

//compares player's input vs computer's choice
function round() {
    alert('Player score is : ' + playerScore + '\nComputer score is: ' + computerScore)
    computerMove = computerChoice()

    if (playerScore === 5 || computerScore === 5) {
        alert (`END GAME, YOUR SCORE WAS ${playerScore} AND COMPUTER SCORE WAS ${computerScore}`)
        return
    }
    else {
        alert('You\'re move is ' + playerMove.toLowerCase() + ' and the computer move is ' + computerMove + '.')
        if (playerMove == computerMove) {
            alert ('ITS A DRAW')
            return
        } else if ((playerMove == 'rock' && computerMove == 'sisscor') 
            || (playerMove == 'sisscor' && computerMove == 'paper') 
            || (playerMove == 'paper' && computerMove == 'rock')) {
            alert ('PLAYER WINS')
            return playerScore += 1
        } else {
            alert ('COMPUTER WINS')
            return computerScore += 1
        }
    }
}  


//make a function to keep terack of the score

//make it click on rock




