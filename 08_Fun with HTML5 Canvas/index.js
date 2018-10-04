
const canvas = document.querySelector('#draw');
const cxt = canvas.getContext('2d'); ///create a 2d context for canvas, we draw on top of this

canvas.width = window.innerWidth; //resize to be size of the window
canvas.height = window.innerHeight; //resize tobe size of the window

cxt.strokeStyle = "blue";
cxt.lineCap   = "round";
cxt.lineJoin = "round";
cxt.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue   = 0;

function clearCanvas() {
    canvas.clearCanvas();
}

function draw(e) {
    if(!isDrawing) return;
    else {
        lastX=e.offsetX;
        lastY=e.offsetY;
		cxt.strokeStyle = `hsl(${hue},100%,50%)`;
        cxt.beginPath();
        cxt.moveTo(lastX,lastY); //where our line starts from
        cxt.lineTo(e.offsetX,e.offsetY); //where ourline movesTo
        cxt.stroke();
        lastX=e.offsetX;
        lastY=e.offsetY;
        hue++;
    }
}

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',(e)=> {
    isDrawing =true;
    lastX =e.offsetX;
    lastY =e.offsetY;
});
canvas.addEventListener('mouseup',()=>isDrawing=false);
canvas.addEventListener('mouseout',()=>isDrawing=false);
