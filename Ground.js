class Ground{
    constructor() {
      var goptions = {
          isStatic: true
      }
      this.body = Bodies.rectangle(450,390,900,20,goptions)
      World.add(world, this.body);
    }
    display(){
      noStroke();
      fill("brown");
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y, 900, 20);
    }
  }
