class Bob {

    constructor(x, y, radius, options) {
        var options = {
            isStatic:true,
            density:1.2
    
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius=radius;
       
        
        World.add(world, this.body);
      }

     
       
      

      display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
       
        strokeWeight(1);
        stroke('black')
        fill('green');
        circle(pos.x, pos.y, this.radius);
       
      }
    }




