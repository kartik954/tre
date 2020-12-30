class Stone{
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            restitution: 0.5,
            friction: 1.0,
            density: 1.2
        };
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("sprites/Pluckingmangoes/stone.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle =this.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}