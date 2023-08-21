console.log("Webpack is working!");

import MovingObject from "./MovingObject.js";
window.MovingObject = MovingObject


const canvasEl = document.getElementById("game-canvas")
const ctx = canvasEl.getContext("2d")




const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
    });


mo.draw(ctx);
