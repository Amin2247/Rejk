let index = 2;  
function preload() {
  myFont = loadFont('assets/PressStart2P-Regular (1).ttf');
  whiteVoid = loadImage('assets/1.png');
  blackVoid = loadImage('assets/2.png');
  centerVoid = loadImage('assets/3.png');
  cursorImg = loadImage('assets/4.png');
}

function setup() {
  createCanvas(700, 700);
  textSize(24)
  
  
}

function draw() {
  const input = window.prompt("enter a number between 1 and 4?");
  console.log("you entered", input);
  
  //if(input < 1 || input > 4 ){
    //Exit();
  //}
  background(255, 204, 0);
  image(whiteVoid, 0, 0);
  image(blackVoid, 0, 0);
  image(centerVoid, 0, 0);
  image(cursorImg, 0, 0);
     
  
  switch(input){
  case '1':
      screen1();
    
      break;
  case '2':
    screen2();
    
    break;
  case '3':
    screen3();
      
    break;
    
case '4':
    screen4();
    
    break;
  default:
    fill(255,255,255)
    line(400, 200, 0, 200);
    square(30, 20, 55);
    //textSize(18)
    text('Rest comes after April 24 ', 20, 190);
    exit();
    break;
    

  }
}

function screen1() {
  fill(255,0,0);
    image(whiteVoid, 0, 0, 100, 100);
    text('I plan to code funtionality this monday at April 18th', 20, 190);
  
    square(50, 20, 55);   
    line(400, 200, 0, 200);
}
function screen2() {
fill(0,255,0);
image(blackVoid, 0, 0,100,100);
square(50, 20, 55);
  //textSize(18)
  line(400, 200, 0, 200);
  text('I plan to Making and Implementing Assets/Art at April 21th', 20,190);

 
}
function screen3() {
fill(0,0,255);
  image(centerVoid, 0, 0,100,100);
    square(50, 20, 55);
    //textSize(18)
    line(400, 200, 0, 200);
    text('plan to debug at Debugging and Testing Software at April 23', 20, 190);
}
function screen4() {
fill(255,0,255);
  image(cursorImg, 0, 0,100,100);
    square(50, 20, 55);
    //textSize(18)
    line(400, 200, 0, 200);
    text('rest after April 26', 20, 190);
}
