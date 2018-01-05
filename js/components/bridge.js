
const width = 1000;
const height = 700;

const top = 0.43;
const bottom = 0.58;

const maxOpenHeight = 50;
const maxOpenWidth = 25;

export default class bridge{

    constructor(){
        this.leftPos = {
            topLeft     : { x : (width/2 - (width*0.1)), y : height*top},
            bottomLeft  : { x : (width/2 - (width*0.1)), y : height*bottom},
            topRight    : { x : (width/2), y : height*top},
            bottomRight : { x : (width/2), y : height*bottom}
        };
        this.rightPos = {
            topLeft     : { x : (width/2), y : height*top},
            bottomLeft  : { x : (width/2), y : height*bottom},
            topRight    : { x : (width/2 + (width*0.1)), y : height*top},
            bottomRight : { x : (width/2 + (width*0.1)), y : height*bottom}
        };
    }

    show(){

        p5.fill('#666666');
        p5.beginShape();
        p5.vertex(this.leftPos.topLeft.x , this.leftPos.topLeft.y);
        p5.vertex(this.leftPos.bottomLeft.x, this.leftPos.bottomLeft.y);
        p5.vertex(this.leftPos.bottomRight.x, this.leftPos.bottomRight.y);
        p5.vertex(this.leftPos.topRight.x, this.leftPos.topRight.y);
        p5.endShape(p5.CLOSE);

        p5.fill('#666666');
        p5.beginShape();
        p5.vertex(this.rightPos.topLeft.x , this.rightPos.topLeft.y);
        p5.vertex(this.rightPos.bottomLeft.x, this.rightPos.bottomLeft.y);
        p5.vertex(this.rightPos.bottomRight.x, this.rightPos.bottomRight.y);
        p5.vertex(this.rightPos.topRight.x, this.rightPos.topRight.y);
        p5.endShape(p5.CLOSE);

        p5.strokeWeight(3);
        p5.stroke('white');
        dashedLine(this.leftPos.topLeft.x, height/2 +3, this.leftPos.topRight.x, height/2 +3);
        p5.strokeWeight(1);
    }

    update(){
        //brodgeOpen global variable
        if(bridgeOpen && this.leftPos.topRight.y >= (height*top - maxOpenHeight ) ){
            
            //Left side 
            this.leftPos.topRight.y -=0.5;
            this.leftPos.bottomRight.y -= 0.5;
            this.leftPos.topRight.x -=0.25;
            this.leftPos.bottomRight.x -= 0.25;

            //Right side 
            this.rightPos.topLeft.y -=0.5;
            this.rightPos.bottomLeft.y -= 0.5;
            this.rightPos.topLeft.x +=0.25;
            this.rightPos.bottomLeft.x += 0.25;
        }else {

        }

        if (bridgeClose && this.leftPos.topRight.y <= (height*top - maxOpenHeight) ){

        }
    }
}
