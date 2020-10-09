var fr;
  var hr;




function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 50, 30);
  fr.shapeColor="green";
  hr=createSprite(300, 200, 30, 50);
  hr.shapeColor="green";
  
}

function draw() {
  background(0,0,0);  

  hr.x=World.mouseX;
  hr.y=World.mouseY;


  if (hr.x-fr.x<hr.width/2+fr.width/2&&
    fr.x-hr.x<hr.width/2+fr.width/2&&
    hr.y-fr.y<hr.height/2+fr.height/2&&
    fr.y-hr.y<hr.height/2+fr.height/2
    )
  {
    hr.shapeColor="cyan";
    fr.shapeColor="cyan";
  }
else{
  hr.shapeColor="green";
  fr.shapeColor="green";
}

  drawSprites();
}