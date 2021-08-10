// Example 02-02
// Draw a simple ellipse

function setup()
{
    createCanvas(480, 120);
}

function draw()
{
    if(mouseIsPressed)
    {
        fill(0);
    }
    else
    {
        fill(255);
    }
    ellipse(mouseX,mouseY,80,80);
}