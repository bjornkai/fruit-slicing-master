const myCanvas = document.querySelector(".fruit-master");
const ctx = myCanvas.getContext("2d");

function startGame() {
  myGamePiece = new component(30, 30, "", 10, 120, "image");
  myGameArea.start();
}

// GLOBAL VARIABLES 
let score = 0;

// FRUIT and BOMB ARRAY/OBJECT
const fruitsArray = [
  {name: `apple`, image: `./images/apple.png`},
  {name: `banana`, image: `./images/banana.png`},
  {name: `blueberries`, image: `./images/blueberries.png`},
  {name: `grapes`, image: `./images/grapes.png`},
  {name: `orange`, image: `./images/orange.png`},
  {name: `peaches`, image: `./images/peaches.png`},
  {name: `pear`, image: `./images/pear.png`},
  {name: `watermelon`, image: `./images/watermelon.png`}
];

const bomb = [
  {name: `bomb`, image: `./images/bomb.png`}
];

// FUNCTION TO CREATE IMG FOR ALL FRUITS

function Fruit (image) {
  // this.image = type;
  this.image = new Image();
  this.image.src = image;

  this.width = 70;
  this.height = 70; 
  this.x = Math.floor(Math.random()*900);
  this.y = Math.floor(Math.random()*400); 
  // this.update = function() {
  //   ctx = myGameArea.context;
  //   if (type == "image") {
  //     ctx.drawImage(this.image, 
  //       this.x, 
  //       this.y,
  //       this.width, this.height);
  //   } else {
  //     ctx.fillStyle = color;
  //     ctx.fillRect(this.x, this.y, this.width, this.height);
  //   }
  // }
  this.draw = function(){
    console.log("= = = == = == = == == =")
    // this.image.onload = () =>{
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      // console.log(" = == = =",this);
    // }
  }
}


function createFruit(){
  console.log("drawing")
  let indx = Math.floor(Math.random()*fruitsArray.length);
  let randomFruitImg  = fruitsArray[indx].image;
  const someFruit = new Fruit(randomFruitImg);
  console.log(someFruit)
  someFruit.draw();
}


function startGame(){
  // drawingLoop();
  update();
}

frames = 0;
function drawingLoop(){
  console.log("helllo")
  ctx.clearRect(0, 0, 1000, 600);
  frames++;
  console.log(frames)

  if(frames % 60 === 1){
    console.log("IN!!!!!")

    createFruit(); 
  }
  // requestAnimationFrame(function(){
  //   drawingLoop();
  // })
}


function update(){
  setInterval(drawingLoop, 1000);
}


startGame();


// let peachesImgX = 700;
// let peachesImgY = 400; 
// let peachesImg = new Image();
// peachesImg.src = fruitsArray[5].image;
// let peaches = new createFruitImgs (50, 50, peachesImgX, peachesImgY, peachesImg)
// function drawingLoop(){
//   ctx.clearRect(0, 0, 1000, 500);
//   ctx.drawImage();
//   peachImgY -= 6;
//   if(peachesImgY < 50){
//     peachesImgY = 1000;
//     peachesImgX = Math.floor(Math.random() * 500);
//   }
//   requestAnimationFrame(function(){
//     drawingLoop();
//   })
// }

// const grapeImg = new Image();
// grapeImg.src = fruitsArray[3].image;

// let grapeImgX = 800;
// let grapeImgY = 200;

// grapeImg.onload = function(){
//     // ctx.drawImage(whichImage, x, y, width, height);
//     ctx.drawImage(grapeImg, grapeImgX, grapeImgY, 50, 50);
// };

// drawingLoop();

// ANIMATE THE CANVAS 

// function drawingLoop(){
//   // erase the whole canvas before drawing everything again

//   ctx.clearRect(0, 0, 1000, 500);
//   ctx.drawImage(grapeImg, grapeImgX, grapeImgY, 50, 50);

//   // start moving grape by changing it X coordinate in every loop call
//   grapeImgY -= 5;

//   // when the grape disappears from the canvas
//   if(grapeImgY < 50){
//       // set its x again to grapeImgX=1000
//       grapeImgY = 1000;
//       // and for each grape pick random Y in range 0 to 500 (which is height of the canvas)
//       grapeImgX = Math.floor(Math.random() * 500);
//   }

//   // re-draw the whole sceen
//   requestAnimationFrame(function(){
//       // sets up a recursive loop (function calls itself multiple times)
//       drawingLoop();
//   });
// }