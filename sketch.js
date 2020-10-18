    // creating var for bullet 
    var bullet,bullet_Weight,bullet_Speed;

    // creating var for wall 
    var wall,wall_Thickness

     
    

    function setup()
    {
      // creating the collision area 
      createCanvas(1000,250);
      
      // creating sprite for bullet 
      bullet = createSprite(50,100,50,20);
      // giving random velocity to the bullet
      bullet_Speed = Math.round(random(223,321));
      // giving random weight to the bullet
      bullet_Weight = Math.round(random(30,52));

      // creating sprite for wall
      wall_Thickness = Math.round(random(22,100));
      wall = createSprite(950,100,wall_Thickness,100);
    
    
    
    }

    function draw()
    {
      // clearing the background 
      background(225);

      // giving velocity to the bullet
      bullet.velocityX = bullet_Speed;


      if (hasCollided(bullet,wall))
      {
        bullet.velocityX = 0;
        var damage_Wall = 0.5*bullet_Weight*bullet_Speed*bullet_Speed/(wall_Thickness*wall_Thickness*wall_Thickness);
        
         if (damage_Wall >= 10)
         {

          wall.shapeColor = color("red");
         }
         
         if (damage_Wall < 10)
         {

          wall.shapeColor = color("green ");
         }
        }
      // to make everything visible 
      drawSprites();  
    }  
     

      
    

    function hasCollided(bullet1,wall1)
    {
     bullet1RightEdge = bullet.x + bullet.width;
     wall1Left6Edge = wall.x;

        if (bullet1RightEdge >= wall1Left6Edge)
     {
      return true 
     }
     return false
    }