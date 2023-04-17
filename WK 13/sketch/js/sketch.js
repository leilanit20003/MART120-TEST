// x and y for my character
var characterX = 100;
var characterY = 150;
// define the key codes for each letter
var w = 85;
var s = 80; 
var a = 60;
var d = 65;

// x and y form a shape
var shapeX = 40; 
var shapeY = 60;
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(600, 800);
    // get a random speed when it starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
}

function draw()
{
    background(140,50,80);
    stroke(0);
    fill(0);
    
    // call createBorders
    createBorders(20);
    
    // message
    textSize(20);
    text("EXIT", width-70,height-70)

    // character one
    fill(25,45,130);
    circle(characterX,characterY,25);

    // key movement
    if(keyIsDown(w))
    {
        characterY -= 15;
    }
    if(keyIsDown(s))
    {
        characterY += 15;
    }
    if(keyIsDown(a))
    {
        characterX -= 15;
    }
    if(keyIsDown(d))
    {
        characterX += 15;
    }

    // character two
    fill(15,150,20)
    // draw the shape
    circle(shapeX, shapeY, 15);

    // random speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

    // move
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    function createBorders(thickness)
{
    rect(0,0,width,thickness);
    // top border
    rect(0,0,thickness,height);
    // left border
    rect(0, height-thickness,width, thickness);
    // bottom border
    rect(width-thickness,0,thickness,height-80);
    // right border
}

    // exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(10);
        textSize(30);
        text("You Win!", width/2-50, height/2-50);
    }

    // shape
    fill(120,130,140)
        circle(mouseShapeX, mouseShapeY, 30);

}
