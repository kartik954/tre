class Mango{
    constructor(x, y, radius){
        var options = {
            isStatic: true,
            restitution: 0.5,
            friction: 1
        };
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("sprites/Pluckingmangoes/mango.png");
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