// KNIFE IMG ON MOUSE

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


// FRUIT and ARRAY/OBJECT

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




// FRUIT CONSTRUCTOR TO CREATE IMG FOR ALL FRUITS

function Fruit (image) {
  this.image = new Image();
  this.image.src = image;

  this.width = 70;
  this.height = 70; 
  this.x = Math.floor(Math.random()*900);
  this.y = Math.floor(Math.random()*400); 
 
  this.draw = function(){
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

// BOMB CONSTRUCTOR

function Bomb (image) {
  this.image = new Image();
  this.image.src = `./images/bomb.png`;
  this.isTouched = false;
  this.width = 70;
  this.height = 70; 
  this.x = Math.floor(Math.random()*900);
  this.y = Math.floor(Math.random()*400); 
 
  this.draw = function(){
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

// MOUSE POSITION

function getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function startGame(){
  drawingLoop();
  // update();
}

// FUNCTION TO CHECK COLLISION

function checkCollision(obj1, obj2){
  return obj1.y + obj1.height >= obj2.clientY
   &&    obj1.y <= obj2.clientY
   &&    obj1.x + obj1.width >= obj2.clientX
   &&    obj1.x <= obj2.clientX
}

frames = 0;
const fruits = [];
function drawingLoop(){
  ctx.clearRect(0, 0, 1000, 5000);
  frames++;
  // console.log(frames)


  if(frames % 40 === 1){
    let indx = Math.floor(Math.random()*fruitsArray.length);
    let randomFruitImg  = fruitsArray[indx].image;
    currentFruit = new Fruit(randomFruitImg);
    fruits.push(currentFruit);
  }

  if(frames % 80 === 1){
    currentBomb = new Bomb();
    currentBomb.draw();
    console.log("bomb");
  }


  for(let i=0; i<fruits.length; i++){
    fruits[i].draw();
  }

  if(fruits.length>3){
    if(frames % 40 ===1){
      let indx = Math.floor(Math.random()*fruits.length);
      fruits.splice(indx, 1);
    }
  }

  // MOUSE + COLLISON DETECTION

  myCanvas.addEventListener("mousemove", function(event) {
    for(let i=0; i<fruits.length; i++){
      if(checkCollision(fruits[i], event)){
        let indx = fruits[i];
        fruits.splice(i, 1);
      }
      };
  });

  // currentFruit.draw();
  setTimeout(function(){
    requestAnimationFrame(function(){
      drawingLoop();
    })
  }, 10);
}

// function update(){
//   setInterval(drawingLoop, 4000);
// }

startGame();