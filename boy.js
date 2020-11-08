class boy{
 constructor(x,y,width,height)  {
     var options = {
         isStatic: true
         
     }
     this.body = Bodies.rectangle(x,y,width,height,options)
     this.width=width;
     this.height=height;
     World.add(world,this.body);
     this.image=loadImage("boy.png");
 }
 display(){
     push ();
     translate(this.body.position.x,this.body.position.y)
     imageMode (CENTER);
     image(this.image,0,0,this.width,this.height);
     pop ();
 }
}
