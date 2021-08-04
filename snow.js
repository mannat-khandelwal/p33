class snow{
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': true
        }
     
        this.x = x;
        this.y = y;
        this.r = 50;
        this.image=loadImage("snow4.webp");
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
    }

    display(){
        imageMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y,50,50);

      for(var i=0; i<10; i++){
        image(this.image, this.image.x, this.image.y);
    }
    }
}