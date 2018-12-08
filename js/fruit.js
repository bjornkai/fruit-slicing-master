const myCanvas = document.querySelector(".fruit-master");
const ctx = myCanvas.getContext("2d");

// GLOBAL VARIABLES 
let score = 0;

// FRUIT and BOMB ARRAY/OBJECT
const fruitsArray = [
  {name: `apple`, image: `./images/apple.png`},
  {name: `banana`, image: `./images/banana.png`},
  {name: `blueberries`, image: `./images/blueberries.png`},
  {name: `grapes`, image: `./images/grapes.png`},
  {name: `orange`, image: `./images/orange`},
  {name: `peaches`, image: `./images/peaches.png`},
  {name: `pear`, image: `./images/pear.png`},
  {name: `watermelon`, image: `./images/watermelon.png`}
];

const bomb = [
  {name: `bomb`, image: `./images/bomb.png`}
];

// FUNCTION TO CREATE IMG FOR ALL FRUITS

function createImg(fruits){
  
}


const grapeImg = new Image();
grapeImg.src = fruitsArray[3].image;

let grapeImgX=800;
let grapeImgY=200;

grapeImg.onload = function(){
    // ctx.drawImage(whichImage, x, y, width, height);
    ctx.drawImage(grapeImg, grapeImgX, grapeImgY, 50, 50);
};

drawingLoop();

// ANIMATE THE CANVAS 

function drawingLoop(){
  // erase the whole canvas before drawing everything again

  //            x  y  width height
  //            ^  ^    ^    ^
  //            |  |    |    |
  ctx.clearRect(0, 0, 1000, 500);
  ctx.drawImage(grapeImg, grapeImgX, grapeImgY, 50, 50);


  // start moving grape by changing it X coordinate in every loop call
  grapeImgY -= 5;

  // when the grape disappears from the canvas
  if(grapeImgY < 50){
      // set its x again to grapeImgX=1000
      grapeImgY = 1000;
      // and for each grape pick random Y in range 0 to 500 (which is height of the canvas)
      grapeImgX = Math.floor(Math.random() * 500);
  }

  // re-draw the whole sceen
  requestAnimationFrame(function(){
      // sets up a recursive loop (function calls itself multiple times)
      drawingLoop();
  });
}