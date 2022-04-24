let index = 2;  

function setup() {
  createCanvas(700, 700);
  background(200,500,100);
  
}

function draw() {
  const input = window.prompt("enter a number between 1 and 4?");
  console.log("you entered", input);
  
  if(input < 1 || input > 4 ){
    Exit();
  }
  
  switch(input){
  case '1':
    fill(255,0,0);
    text('I plan to code funtionality this monday at April 18th', 20, 190);
    square(30, 20, 55);   
    textSize(11)
    line(400, 200, 0, 200);
      break;
  case '2':
    fill(0,255,0);
    square(30, 20, 55);
    textSize(11)
    line(400, 200, 0, 200);
    text('I plan to Making and Implementing Assets/Art at April 21th', 40,210);
    break;
  case '3':
    fill(0,0,255);
    square(30, 20, 55);
    textSize(11)
    line(400, 200, 0, 200);
    text('plan to debug at Debugging and Testing Software at April 23', 160, 190);
    break;
    case '4':
    fill(255,0,255)
  default:
    line(400, 200, 0, 200);
    square(30, 20, 55);
    textSize(11)
    text('extra features after April 23rd ', 270, 210);
textSize(6);
      break;

  }
}