let canvas = document.getElementById("my-canvas");
/**
 * @param {any} canvas
 * @returns {CanvasRenderingContext2D}
 */
function createPaper(canvas) {
  return canvas.getContext("2d");
}

let paper = createPaper(canvas);

function createWowFace() {
  //draw face
  paper.beginPath();
  paper.fillStyle = "#ffc83d";
  paper.strokeStyle = "black";
  paper.lineWidth = 50;
  paper.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI);
  paper.stroke();
  paper.fill();
  paper.closePath();

  //draw left eye
  paper.beginPath();
  paper.lineWidth = 1;

  paper.strokeStyle = "black";
  paper.rect(450, 290, 30, 30);
  paper.fillStyle = "black";
  paper.stroke();
  paper.fill();
  paper.closePath();

  paper.beginPath();
  paper.strokeStyle = "black";
  paper.arc(465, 290, 15, Math.PI, 2 * Math.PI);
  paper.stroke();
  paper.fillStyle = "black";
  paper.fill();
  paper.closePath();

  paper.beginPath();
  paper.strokeStyle = "black";
  paper.arc(465, 320, 15, 0, Math.PI);
  paper.stroke();
  paper.fillStyle = "black";
  paper.fill();
  paper.closePath();

  //draw right eye
  paper.beginPath();
  paper.strokeStyle = "black";
  paper.rect(610, 290, 30, 30);
  paper.fillStyle = "black";
  paper.stroke();
  paper.fill();
  paper.closePath();

  paper.beginPath();
  paper.strokeStyle = "black";
  paper.arc(625, 290, 15, Math.PI, 2 * Math.PI);
  paper.stroke();
  paper.fillStyle = "black";
  paper.fill();
  paper.closePath();

  paper.beginPath();
  paper.strokeStyle = "black";
  paper.arc(625, 320, 15, 0, Math.PI);
  paper.stroke();
  paper.fillStyle = "black";
  paper.fill();
  paper.closePath();

  //draw mouth
  paper.beginPath();
  paper.strokeStyle = "black";
  paper.rect(505, 400, 80, 15);
  paper.fillStyle = "black";
  paper.stroke();
  paper.fill();
  paper.closePath();

  paper.beginPath();
  paper.strokeStyle = "black";
  paper.arc(545, 400, 40, Math.PI, 2 * Math.PI);
  paper.stroke();
  paper.fillStyle = "black";
  paper.fill();
  paper.closePath();

  paper.beginPath();
  paper.strokeStyle = "black";
  paper.arc(545, 415, 40, 0, Math.PI);
  paper.stroke();
  paper.fillStyle = "black";
  paper.fill();
  paper.closePath();
}

function createSadFace() {
  //draw face
  paper.beginPath();
  paper.fillStyle = "#ffc83d";
  paper.strokeStyle = "black";
  paper.lineWidth = 50;
  paper.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI);
  paper.stroke();
  paper.fill();
  paper.closePath();

  //draw left eye
  paper.beginPath();
  paper.lineWidth = 1;

  paper.strokeStyle = "black";
  paper.rect(450, 290, 30, 30);
  paper.fillStyle = "black";
  paper.stroke();
  paper.fill();
  paper.closePath();

  paper.beginPath();
  paper.strokeStyle = "black";
  paper.arc(465, 290, 15, Math.PI, 2 * Math.PI);
  paper.stroke();
  paper.fillStyle = "black";
  paper.fill();
  paper.closePath();

  paper.beginPath();
  paper.strokeStyle = "black";
  paper.arc(465, 320, 15, 0, Math.PI);
  paper.stroke();
  paper.fillStyle = "black";
  paper.fill();
  paper.closePath();

  //draw right eye
  paper.beginPath();
  paper.strokeStyle = "black";
  paper.rect(610, 290, 30, 30);
  paper.fillStyle = "black";
  paper.stroke();
  paper.fill();
  paper.closePath();

  paper.beginPath();
  paper.strokeStyle = "black";
  paper.arc(625, 290, 15, Math.PI, 2 * Math.PI);
  paper.stroke();
  paper.fillStyle = "black";
  paper.fill();
  paper.closePath();

  paper.beginPath();
  paper.strokeStyle = "black";
  paper.arc(625, 320, 15, 0, Math.PI);
  paper.stroke();
  paper.fillStyle = "black";
  paper.fill();
  paper.closePath();

  //draw mouth
  paper.beginPath();
  paper.strokeStyle = "black";
  paper.arc(545, 430, 60, Math.PI, 2 * Math.PI);
  paper.stroke();
  paper.fillStyle = "black";
  paper.fill();
  paper.closePath();

}

function createNoCapFace() {
    //draw face
    paper.beginPath();
    paper.fillStyle = "#ffc83d";
    paper.strokeStyle = "black";
    paper.lineWidth = 50;
    paper.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();
    paper.closePath();
  
    //draw left eye
    paper.beginPath();
    paper.lineWidth = 1;
  
    paper.strokeStyle = "black";
    paper.rect(450, 290, 30, 30);
    paper.fillStyle = "black";
    paper.stroke();
    paper.fill();
    paper.closePath();
  
    paper.beginPath();
    paper.strokeStyle = "black";
    paper.arc(465, 290, 15, Math.PI, 2 * Math.PI);
    paper.stroke();
    paper.fillStyle = "black";
    paper.fill();
    paper.closePath();
  
    paper.beginPath();
    paper.strokeStyle = "black";
    paper.arc(465, 320, 15, 0, Math.PI);
    paper.stroke();
    paper.fillStyle = "black";
    paper.fill();
    paper.closePath();
  
    //draw right eye
    paper.beginPath();
    paper.strokeStyle = "black";
    paper.rect(610, 290, 30, 30);
    paper.fillStyle = "black";
    paper.stroke();
    paper.fill();
    paper.closePath();
  
    paper.beginPath();
    paper.strokeStyle = "black";
    paper.arc(625, 290, 15, Math.PI, 2 * Math.PI);
    paper.stroke();
    paper.fillStyle = "black";
    paper.fill();
    paper.closePath();
  
    paper.beginPath();
    paper.strokeStyle = "black";
    paper.arc(625, 320, 15, 0, Math.PI);
    paper.stroke();
    paper.fillStyle = "black";
    paper.fill();
    paper.closePath();
  
    //draw mouth
    paper.beginPath();
    paper.strokeStyle = "black";
    paper.rect(430, 400, 230, 20);
    paper.fillStyle = "black";
    paper.stroke();
    paper.fill();
    paper.closePath();

    paper.beginPath();
    paper.strokeStyle = "black";
    paper.arc(430, 410,10,Math.PI,10);
    paper.stroke();
    paper.fillStyle = "black";
    paper.fill();
    paper.closePath();

    paper.beginPath();
    paper.strokeStyle = "black";
    paper.arc(660, 410,10,Math.PI,10);
    paper.stroke();
    paper.fillStyle = "black";
    paper.fill();
    paper.closePath();
  }



let wowFace = document.getElementById('wow');
let sadFace = document.getElementById('sad');
let noCap = document.getElementById('no-cap');
wowFace.addEventListener("mousedown", createWowFace);
sadFace.addEventListener("mousedown", createSadFace);
noCap.addEventListener("mousedown", createNoCapFace);

