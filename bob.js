class bob
{
	constructor(x,y,r)
	{
		var options={
			
			restitution:1.2,
			friction:1,
			density:1
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(x, y, r,options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			var angle = this.body.angle
			push()
			translate(paperpos.x, paperpos.y);
			rotate(angle)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipseMode(RADIUS)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

