let canvas = document.getElementById("circleCanvas");
let ctx = canvas.getContext("2d");

let circles = [];

function Circle(x, y){
    this.x = x;
    this.y = y;
  
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);

    //radius goes up to 5-10
    this.radius = Math.floor(Math.random()*6)+5;
    this.color = "rgb("+r1+","+r2+","+r3+")";

    this.draw = function draw(){ 
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x,this.y,this.radius,0, 2 * Math.PI);
            ctx.fill();
        }
    }

    function add(event){
        let x = event.offsetX;
        let y = event.offsetY;

        let circle1 = new Circle(x,y);

        circle1.draw();
        circles.push(circle1);
    }
// trial draw() function before making Circle(x,y) constructor

//     function draw(event){

//         let r1 = Math.floor(Math.random()*256);
//         let r2 = Math.floor(Math.random()*256);
//         let r3 = Math.floor(Math.random()*256);

//         let radius = Math.floor(Math.random()*10)+5;
//         let color = "rgb("+r1+","+r2+","+r3+")";

//         let x = event.offsetX;
//         let y = event.offsetY;

//         ctx.beginPath();
//         ctx.fillStyle = color;
//         ctx.arc(x, y, radius, 0, 2 * Math.PI);
//         ctx.fill();

//         //push circle
//         let circle1 = new Circle(x ,y , radius, color);
//         circles.push(circle1);
// }

function change(){ //change button
    
    ctx.clearRect(0,0,300,300);//clear canvas

    for(let i = 0; i < circles.length-1; i++){

        //radius goes up to 5-10
        circles[i].radius = Math.floor(Math.random()*6) + 5;
        
        circles[i].draw();

        console.log('radius[i]: ', circles[i].radius);

    }
}
