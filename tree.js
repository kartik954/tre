class Tree{
    constructor(x, y){
        //this.width = width;
        //this.height = height;
        var property = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 50, 50, property);
        this.image = loadImage("sprites/Pluckingmangoes/tree.png");
        World.add(world, this.body);
    }
    display(){
        image(this.image, this.body.position.x, this.body.position.y, 450, 450)
    }
}