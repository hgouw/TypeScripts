// To compile the main TypeScript file for AMD systems
// tsc --module amd TestShape.ts

// To compile the main TypeScript file for Commonjs systems (executable)
// tsc --module commonjs TestShape.ts

import shape = require("./IShape")
import circle = require("./Circle")
import triangle = require("./Triangle")

function drawAllShapes(shapeToDraw: shape.IShape) {
    shapeToDraw.draw();
}

drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());