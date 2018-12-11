$(window).on(`load`, function(){
  $(document).mousemove(function(e) {
    $(`#knife`).offset({
      left: e.pageX -30,
      top: e.pageY -30
    });
    });
  })



const myCanvas = document.querySelector(".fruit-master");
const ctx = myCanvas.getContext("2d");

function startGame() {
  myGamePiece = new component(30, 30, "", 10, 120, "image");
  myGameArea.start();
}

// GLOBAL VARIABLES 

let currentFruit
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

const knife = [
  {name: `knife`, image: `./images/knife.png`}
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
    // console.log("= = = == = == = == == =")
    // this.image.onload = () =>{
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      // console.log(" = == = =",this);
    // }
  }
}


// function createFruit(){
//   console.log("drawing")
//   let indx = Math.floor(Math.random()*fruitsArray.length);
//   let randomFruitImg  = fruitsArray[indx].image;
//   currentFruit = new Fruit(randomFruitImg);
//   // console.log(currentFruit)
//   currentFruit.draw();
// }


function startGame(){
  drawingLoop();
  // update();
}

frames = 0;
const fruits = [];
function drawingLoop(){
  // console.log("helllo")
  ctx.clearRect(0, 0, 1000, 5000);
  frames++;
  console.log(frames)


  if(frames % 60 === 1){
    // console.log("IN!!!!!")

    // createFruit(); 

    let indx = Math.floor(Math.random()*fruitsArray.length);
    let randomFruitImg  = fruitsArray[indx].image;
    currentFruit = new Fruit(randomFruitImg);
    // console.log(currentFruit);
    fruits.push(currentFruit);
    
  }

  for(let i=0; i<fruits.length; i++){
    fruits[i].draw();
  }

  if(fruits.length>3){
    if(frames % 30 ===1){
      let indx = Math.floor(Math.random()*fruits.length);
      fruits.splice(indx, 1);
    }
  }


  // currentFruit.draw();
  setTimeout(function(){
    requestAnimationFrame(function(){
      drawingLoop();
    })
  }, 40);
}


// function update(){
//   setInterval(drawingLoop, 4000);
// }


startGame();