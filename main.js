// image arrays
const images = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

// first image randomization
const randomNumber1 = Math.floor(Math.random() * 6);
const randomImage1 = images[randomNumber1];

document.querySelector('.img1').setAttribute('src' , randomImage1);

// second image randomization
const randomNumber2 = Math.floor(Math.random() * 6);
const randomImage2 = images[randomNumber2];

document.querySelector('.img2').setAttribute('src' , randomImage2);

// conditional statement for the result of the game
if ( randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 Winss"
} else if (randomNumber2 < randomNumber1) {
    document.querySelector('h1').innerHTML = "player 1 Winss"
} else if ( randomNumber2 === randomNumber1) {
    document.querySelector('h1').innerHTML = "Draww!"
} else {
    document.querySelector('h1').innerHTML =  "Refresh Me"
}
