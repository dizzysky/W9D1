console.log("Webpack is working!");

import MovingObject from "./MovingObject.js";
window.MovingObject = MovingObject


const canvasEl = document.getElementById("game-canvas")
const ctx = canvasEl.getContext("2d")
