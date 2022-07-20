let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let drawButton = document.getElementById("drawButton");



function drawCircles(){
    let x = 15;
    let y = 15;
    
    ctx.clearRect(0,0,300, 30);//clear canvas

    let circleNum = +document.getElementById("circleNum").value;
    let color = document.getElementById("color").value;

    if(circleNum > 10 || circleNum < 0)
        alert("error: invalid number of circles");
    
    for(let i = 1; i <= circleNum ; i++){

        ctx.fillStyle = color;
        ctx.strokeStyle ="black";
        ctx.beginPath();
        ctx.arc(x, y, 15, 0 , 2 * Math.PI); //yellow circle
        ctx.fill();
        ctx.stroke();
        x += 30;
    }
}

    
