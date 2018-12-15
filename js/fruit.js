// places the knife image on the mouse

// $(window).on(`load`, function(){
//   $(document).mousemove(function(e) {
//     $(`#knife`).offset({
//       left: e.pageX -30,
//       top: e.pageY -30
//     });
//     });
//   })

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

// FUNCTION TO CREATE IMG FOR ALL FRUITS

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

// function to detect when the knife is over a fruit
// if so, slice fruit and gain a point 

function checkCollision(obj1, obj2){
  return obj1.y + obj1.height >= obj2.clientY
   &&    obj1.y <= obj2.clientY
   &&    obj1.x + obj1.width >= obj2.clientX
   &&    obj1.x <= obj2.clientX
}

frames = 0;
const fruits = [];
function drawingLoop(){
  // console.log("hello")
  ctx.clearRect(0, 0, 1000, 5000);
  frames++;
  // console.log(frames)


  if(frames % 50 === 1){
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
    if(frames % 40 ===1){
      let indx = Math.floor(Math.random()*fruits.length);
      fruits.splice(indx, 1);
    }
  }

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