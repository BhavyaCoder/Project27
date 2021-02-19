class ground
{
constructor(x,y,height,angle)
{
    var options=
    {
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2,
    
    }
    this.x=x;
    this.y=y;
    this.angle=angle;
    this.height=height
    this.ground=Bodies.rec(this.x,this.y,this.angle,this.height,options)
    World.add(world,this.ground);
}
display () 
{
var groundpos=this.ground.position;

push()
translate(groundpos.x,groundpos.y);
rectMode(CENTER)
StrokeWeight(3);
fill(255,0,255)
ellipse(0,0,this.angle,this.height);
pop()
}

}