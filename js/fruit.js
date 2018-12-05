const myCanvas = document.querySelector(".fruit-master");
const ctx = myCanvas.getContext("2d");

// GLOBAL VARIABLES 
let score = 0;

// FRUIT and BOMB ARRAY/OBJECT
const fruitsArray = [
  {name: `apple`, image: `/images/apple.png`},
  {name: `banana`, image: `/images/banana.png`},
  {name: `blueberries`, image: `/images/blueberries.png`},
  {name: `grapes`, image: `/images/grapes.png`},
  {name: `orange`, image: `/images/orange`},
  {name: `peaches`, image: `/images/peaches.png`},
  {name: `pear`, image: `/images/pear.png`},
  {name: `watermelon`, image: `/images/watermelon.png`}
];

const bomb = [
  {name: `bomb`, image: `/images/bomb.png`}
];

// GAME CONSTRUCTOR FUNCTION


