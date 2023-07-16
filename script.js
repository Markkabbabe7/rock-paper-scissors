
// rock = 0 , paper = 1 , scissors = 2

let playerScore = 0;
let computerScore = 0;

function start() {
let player = prompt('Chose your weapon (rock , paper , scissorss)');
console.log(player);
let pc = (Math.floor(Math.random() * 3));
console.log(pc);
if (player.toLowerCase() === 'rock' && pc === 0) {
        alert('it is a tie');
       } else if (player.toLowerCase() === 'rock' && pc === 1){
        alert('pc won');
        computerScore +=1;
       } else if (player.toLowerCase() === 'rock' && pc === 2) {
        alert('player won');
        playerScore +=1;
       } else if (player.toLowerCase() === 'paper' && pc === 0) {
        alert('player won');
        playerScore +=1;
       } else if (player.toLowerCase() === 'paper' && pc === 1){
        alert('it is a tie');
       } else if (player.toLowerCase() === 'paper' && pc === 2) {
        alert('pc won');
        computerScore +=1;
       } else if (player.toLowerCase() === 'scissors' && pc === 0) {
        alert('pc won');
        computerScore +=1;
      } else if (player.toLowerCase() === 'scissors' && pc === 1){
        alert('player won');
        playerScore +=1;
       } else if (player.toLowerCase() === 'scissors' && pc === 2) {
        alert('it is a tie');
       } else {
        alert('you typed something wrong');
       }
}
function game(){
    start();
    console.log(playerScore);
    console.log(computerScore);
    start();
    console.log(playerScore);
    console.log(computerScore);
    start();
    console.log(playerScore);
    console.log(computerScore);
    start();
    console.log(playerScore);
    console.log(computerScore);
    start();
    console.log(playerScore);
    console.log(computerScore);

if ( computerScore > playerScore ) {
    alert('you lost');
} else if ( playerScore > computerScore ){
    alert('congrats you won');
} else if (computerScore = playerScore) {
    alert('your score is like the computer score so IT IS A TIE ')
}}

game();


