console.log("greetings from the moving objects file")

class MovingObject {
    constructor(inputs) {
        this.pos = inputs.pos 
        this.vel = inputs.vel 
        this.radius = inputs.radius 
        this.color = inputs.color
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
        ctx.fill()
    }
}

export default MovingObject;


