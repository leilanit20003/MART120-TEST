var movement;
var redColor = 123;
var greenColor = 39;
var blueColor = 21;

var x = 100;
var y = 200;
var diameter = 50;

var x2 = 200;
var y2 = 400;

var x3 = 150;
var y3 = 250;

function setup() {
    createCanvas(500,600);
    movement = Math.floor(Math.random() * 10) + 1;
}

    function draw()
    {
        background(220);

        textSize(32);
        text('Hello there!', 10, 30);

        circle(50,70,50);
        circle(x, y, 25);
        if (x >= 500 || x <= 0) {
            movement *= -1;
        }
        x += movement;
        
        function draw() {
            background(220);
            square(30,40,50);
        }

        function draw() {
            background(220);
            triangle(30, 75, 58, 20, 86, 75);
        }

        function draw() {
            background(220);
            line(30, 20, 85, 75);
        }


        function text()
            textSize(32);
            text('Michelle Lani Terry', 10, 30);
        

    }
