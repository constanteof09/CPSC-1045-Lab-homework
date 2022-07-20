//Question 1
function parseString(){

    let sentence = document.getElementById("sentence").value;
    let letter = document.getElementById("letter").value;
    let stringOutput = document.getElementById("stringOutput");
    let times = 0;

    if(letter.length > 1)
        stringOutput.innerHTML = "enter only one letter";
    else{
        stringOutput.innerHTML = "The letter appears in the string";
        for( let i = 0; i < sentence.length; i++){

            let char = sentence.charAt(i).toLowerCase();

            if(char == letter.toLowerCase())
                times += 1;

            stringOutput.innerHTML = "The letter " + letter + " appears " + times + " times.";
        }
    }
}

//Question 2
function drawSquare(){
    let squareHeight = +document.getElementById("squareHeight").value;
    let squareOutput = document.getElementById("squareOutput");

    //check if height input is between 1 and 9
    if((squareHeight < 1) || (squareHeight > 9))
        squareOutput.innerHTML = "height input not between 1 and 9";
    else{
        let str="";
        let dots = ".";
        let pos = squareHeight;
        
        //num of rows and cols must equal input number ex:5
        for(let row = 1; row <= squareHeight; row++)
        {
            //if else conditions to determine to print "." or number(i)
            for(let dot = 1; dot <= squareHeight; dot++){
                if(dot == pos){
                    str += row;
                    pos -= 1;
                }
                else
                    str += dots;
                }
                str += "<br>"; 
        }
        squareOutput.innerHTML = str;
        }
    }

//Question 3
function clickCircle(event){

    //canvas dimensions: w:200 by h:200
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let mouseX = event.offsetX;
    let mouseY = event.offsetY;

    //circle
    ctx.clearRect(0,0,200,200);//clear canvas

    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
    ctx.fill();
}
