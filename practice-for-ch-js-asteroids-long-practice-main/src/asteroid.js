



class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "black";

    constructor(options = {}) {
        options.color = Asteroid.COLOR;
        options.pos = options.pos;
        options.radius = Asteroid.RADIUS;

    }
}



export default Asteroid;