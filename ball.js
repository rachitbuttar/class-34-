class Ball{
    constructor(x,y,w,h){
    var options ={
        "restitution":0.6
    }
 this.body=Bodies.rectangle(x,y,w,h,options);
 this.width=w;
 this.height=h;
 World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(5);
        fill("black")
        stroke("pink")
        ellipse(0,0,this.width,this.height)
        pop();
    }
}