let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

function Smiley(x,y) {
    
    // clearCanvas(); //clear canvas

    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, 50, 0 , 2 * Math.PI); //yellow circle
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y+10, 20, 0 , Math.PI); //smile
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x-15, y-20, 10, 0 , 2 * Math.PI); //r-eye
    ctx.arc(x+15, y-20, 10, 0 , 2 * Math.PI); //l-eye
    ctx.fill();
} 

let x = 200;
let y = 200;

function smileyLoop(){
    let N = +document.getElementById("smileNum").value;
    let R = +document.getElementById("centerDistance").value;
    
    if(R > 150 || R < (-150) || (N > 9))
        alert("You entered an invalid value");
    else{
        ctx.clearRect(0,0,400,400); //clear canvas
        ctx.save();
        ctx.translate(200, 200);

        for(let i = 1; i <= N; i++){
            Smiley(R,0);
            ctx.rotate(2*Math.PI/N);
        }

        ctx.restore();
    }
   
}
