let canvas = document.getElementById("my-canvas");
/**
 * @param {any} canvas
 * @returns {CanvasRenderingContext2D}
 */
function createPaper(canvas) {
    return canvas.getContext("2d");
}


let paper = createPaper(canvas);

function drawCircle(circleX, circleY, radius, color){
    paper.beginPath();
    paper.fillStyle = color;
    paper.strokeStyle = color;
    paper.arc(circleX, circleY,radius, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();
    paper.closePath();
}


function drawRetangle(recX, recY, width, height, color){

}// setInterval(() => {
//     let delta = (Date.now() - currentTime) / 1000;
//     let fps = 1 / delta;
//     currentTime = Date.now();
//     paper.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle(circleX);
//     circleX = 350 + (540/2) * Math.cos((omega*currentTime)/1000);
// }, 1000 / 60);


let eyeX = 460;
let eyeY = 310;
let eyeRadius = 15;
// let eyeColor = "black";

function drawEye(x, y){
    paper.strokeStyle = "black";
    paper.rect(x, y, 30, 20);
    paper.fillStyle = "black";
    paper.stroke();
    paper.fill();


    // paper.moveTo(x+30,y);
    // paper.lineTo(x+30, y+20);
    // paper.fillStyle = "white";
    // paper.stroke();
    // paper.fill();
    // paper.closePath();
drawEye(eyeX, eyeY);

    // paper.beginPath();
    // paper.strokeStyle = "black";
    // paper.arc(x+15, y, radius, Math.PI, 2 * Math.PI);
    // paper.stroke();
    // paper.fillStyle = "white";
    // paper.fill();

    // paper.beginPath();
    // paper.strokeStyle = "black";
    // paper.arc(x+15, y+20, radius, 0, Math.PI);
    // paper.stroke();
    // paper.fillStyle = "white";
    // paper.fill();
}

function drawMouth(x, y, radius){
    paper.moveTo(x,y); // x y
    paper.strokeStyle = "black";
    paper.lineTo(x, y+27); // x y+20

    paper.moveTo(x+60,y);
    paper.lineTo(x+60, y+27);
    paper.stroke();
    paper.closePath();

    paper.beginPath();
    paper.strokeStyle = "black";
    paper.arc(x+30, y, radius, Math.PI, 2 * Math.PI);
    paper.stroke();

    paper.beginPath();
    paper.strokeStyle = "black";
    paper.arc(x+30, y+27, radius, 0, Math.PI);
    paper.stroke();
}

drawCircle(canvas.width/2,canvas.height/2, 150,"#ffc83d");


    // eyeX = 590;
    // eyeY = 310;
    // eyeRadius = 15;
    // eyeColor = "black";  
// drawEye(eyeX, eyeY, eyeRadius, eyeColor);

//     eyeX = 509;
//     eyeY = 390;
//     eyeRadius = 30;
//     eyeColor = "black";
    
// drawMouth(eyeX, eyeY, eyeRadius, eyeColor);

// drawCircle(310,200,20, "black");
// drawCircle(410,200,20, "black");


// V??? Doraemon
// window.onload = function () {
//     var cxt = document.getElementById('my-canvas').getContext('2d');
//     //V??? ?????u
//     cxt.beginPath();
//     cxt.lineWidth = 1;
//     cxt.strokeStyle = '#000';
//     cxt.arc(200, 175, 175, 0.7 * Math.PI, 0.3 * Math.PI);
//     cxt.fillStyle = '#0bb0da';
//     cxt.fill();
//     cxt.stroke();

//     //M???t
//     cxt.beginPath();
//     cxt.fillStyle = '#fff';
//     cxt.moveTo(110, 110);
//     cxt.quadraticCurveTo(-10, 200, 120, 315);//???????????????????????????,?????????(-10,200),?????????(120,315)
//     cxt.lineTo(280, 315);//???????????????????????????????????????????????????110???110?????????280???315????????????
//     cxt.quadraticCurveTo(410, 210, 290, 110);
//     cxt.lineTo(110, 110);
//     cxt.fill();
//     cxt.stroke();

//     //M???t
//     cxt.beginPath();
//     cxt.lineWidth = 1;
//     cxt.fillStyle = '#fff';
//     cxt.moveTo(110, 110);
//     cxt.bezierCurveTo(110, 25, 200, 25, 200, 100);//???????????????????????????,?????????1(110,25),?????????2(200,25),?????????(200,100)??????????????????????????????
//     cxt.bezierCurveTo(200, 175, 110, 175, 110, 100);//??????????????????
//     cxt.moveTo(200, 100);
//     cxt.bezierCurveTo(200, 25, 290, 25, 290, 100);
//     cxt.bezierCurveTo(290, 175, 200, 175, 200, 100);
//     cxt.fill();
//     cxt.stroke();


//     // tr??ng ??en m???t ph???i    
//     cxt.beginPath();
//     cxt.fillStyle = '#000';
//     cxt.arc(230, 130, 12, 0, 2 * Math.PI);
//     cxt.fill();
//     cxt.stroke();

//     //tr??ng ??en m???t tr??i
//     cxt.beginPath();
//     cxt.fillStyle = '#000';
//     cxt.arc(170, 130, 12, 0, 2 * Math.PI);
//     cxt.fill();
//     cxt.stroke();

//     //M??i
//     cxt.beginPath();
//     cxt.arc(200, 165, 25, 0, 2 * Math.PI);
//     cxt.fillStyle = '#d05823';
//     cxt.fill();
//     cxt.stroke();

//     //R??u
//     //R??u tr??i
//     cxt.beginPath();
//     cxt.moveTo(80, 175);
//     cxt.lineTo(150, 195);
//     cxt.moveTo(80, 200);
//     cxt.lineTo(150, 205);
//     cxt.moveTo(80, 225);
//     cxt.lineTo(150, 215);

//     //r??u gi???a
//     cxt.moveTo(200, 195);
//     cxt.lineTo(200, 295);

//     //r??u ph???i
//     cxt.moveTo(250, 195);
//     cxt.lineTo(320, 175);
//     cxt.moveTo(250, 205);
//     cxt.lineTo(320, 200);
//     cxt.moveTo(250, 215);
//     cxt.lineTo(320, 225);
//     cxt.stroke();

//     //Mi???ng
//     cxt.moveTo(80, 240);
//     cxt.quadraticCurveTo(200, 350, 320, 240);
//     cxt.stroke();


//     //V??ng ??eo c???
//     cxt.beginPath();
//     cxt.moveTo(96, 316);
//     cxt.lineTo(305, 316);
//     cxt.lineTo(320, 316);
//     cxt.arcTo(330, 316, 330, 326, 10);//??????????????????????????????????????????????????????????????????(330,316),???????????????(330,326),?????????10
//     cxt.lineTo(330, 336);
//     cxt.arcTo(330, 346, 305, 346, 10);
//     cxt.lineTo(81, 346);
//     cxt.arcTo(71, 346, 71, 336, 10);
//     cxt.lineTo(71, 326);
//     cxt.arcTo(71, 316, 81, 316, 10);
//     cxt.lineTo(96, 316);
//     cxt.fillStyle = '#b13209';
//     cxt.fill();
//     cxt.stroke();

//     //C?? th???
//     cxt.beginPath();
//     cxt.fillStyle = '#0bb0da';
    
//     cxt.moveTo(80, 346);

//     //Qu???n ??o tr??i
//     cxt.lineTo(26, 406);
//     cxt.lineTo(65, 440);
//     cxt.lineTo(85, 418);
//     cxt.lineTo(85, 528);
//     cxt.lineTo(185, 528);

//     //Qu???n ??o ph???i
//     cxt.lineTo(315, 528);
//     cxt.lineTo(315, 418);
//     cxt.lineTo(337, 440);
//     cxt.lineTo(374, 406);
//     cxt.lineTo(320, 346);
//     cxt.fill();
//     cxt.stroke();

//     //Tay
//     //Tay tr??i
//     cxt.beginPath();
//     cxt.fillStyle = '#fff';
//     cxt.arc(37, 433, 30, 0, 2 * Math.PI);
//     cxt.fill();
//     cxt.stroke();
//     //Tay ph???i
//     cxt.beginPath();
//     cxt.fillStyle = '#fff';
//     cxt.arc(363, 433, 30, 0, 2 * Math.PI);
//     cxt.fill();
//     cxt.stroke();

//     // B???ng
//     cxt.beginPath();
//     cxt.fillStyle = '#fff';
//     cxt.arc(200, 400, 91, 1.8 * Math.PI, 1.2 * Math.PI);
//     cxt.fill();
//     cxt.stroke();
//     //T??i nh???
//     cxt.beginPath();
//     cxt.fillStyle = '#fff';
//     cxt.moveTo(130, 394);
//     cxt.lineTo(270, 394);
//     cxt.moveTo(130, 394);
//     cxt.bezierCurveTo(130, 490, 270, 490, 270, 394);
//     cxt.fill();
//     cxt.stroke();

//     //kho???n c??ch gi???a 2 tr???ng tr??i
//     cxt.beginPath();
//     cxt.fillStyle = '#fff';
//     cxt.arc(200, 529, 20,Math.PI, 0);
//     cxt.fill();
//     cxt.stroke();

//     //ch??n
//     //ch??n tr??i
//     cxt.beginPath();
//     cxt.fillStyle='#fff';
//     cxt.moveTo(180,528);
//     cxt.lineTo(72,528);
//     cxt.bezierCurveTo(52,528,52,558,72,558);
//     cxt.lineTo(180,558);
//     cxt.moveTo(180,558);
//     cxt.bezierCurveTo(200,558,200,528,180,528);
//     cxt.fill();
//     cxt.stroke();

//     //ch??n ph???i
//     cxt.beginPath();
//     cxt.fillStyle='#fff';
//     cxt.moveTo(220,528);
//     cxt.lineTo(328,528);
//     cxt.bezierCurveTo(348,528,348,558,328,558);
//     cxt.lineTo(220,558);
//     cxt.moveTo(220,558);
//     cxt.bezierCurveTo(200,558,200,528,220,528);
//     cxt.fill();
//     cxt.stroke();
// };






// function drawHead(){
    
// }






