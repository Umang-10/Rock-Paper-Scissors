function computerPlay() {
    let array = ['paper', 'rock', 'scissors']
    console.log(array[parseInt(Math.random() * 3)])
    return array[parseInt(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        // console.log('Its a Tie.')
        return "It's a Tie";
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        // console.log('Computer Wins.')
        return 'Computer Wins'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        // console.log('You Won')
        return 'You Win'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        // console.log('You Won')
        return 'You Win'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        // console.log('Computer Wins.')
        return 'Computer Wins';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        // console.log('Computer Wins.')
        return 'Computer Wins'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        // console.log('You Won')
        return 'You Win'
    } else {
        // console.log('Wrong Input')
        return 'Wrong Input'
    }
}

function game() {
    let your_score = 0;
    let comp_score = 0;

    for (let i = 0; i <= 5; i++) {
        playerSelection = prompt('Choose Rock, Paper, Scissors')
        computerSelection = computerPlay()

        round = playRound(playerSelection, computerSelection)

        if (round === 'You Win') {
            your_score += 1
            console.log(`Your Score : ${your_score} \n
                        Computer Score : ${comp_score}`)

        } else if (round === 'Computer Wins') {
            comp_score += 1;
            console.log(`Your Score : ${your_score} \n
                        Computer Score : ${comp_score}`)

        } else {
            console.log(`Your Score : ${your_score} \n
                        Computer Score : ${comp_score}`)
        }
    }
    if (your_score > comp_score) {
        console.log('Congratulations!!! YOU WON!!!')
    } else if (your_score < comp_score) {
        console.log('Better Luck Next Time.')
    } else {
        console.log('A TIE!')
    }

}