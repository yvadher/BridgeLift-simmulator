
import * as constants from '../constants';
import dashLine from '../Methods/dashedLine';

const width = constants.width;
const height = constants.height;

const top = 0.43;
const bottom = 0.58;

const maxOpenHeight = 50;
const maxOpenWidth = 25;

const roadColor = constants.roadColor;

const speed = constants.speedAnim/10;

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

        p5.fill(roadColor);
        p5.beginShape();
        p5.vertex(this.leftPos.topLeft.x , this.leftPos.topLeft.y);
        p5.vertex(this.leftPos.bottomLeft.x, this.leftPos.bottomLeft.y);
        p5.vertex(this.leftPos.bottomRight.x, this.leftPos.bottomRight.y);
        p5.vertex(this.leftPos.topRight.x, this.leftPos.topRight.y);
        p5.endShape(p5.CLOSE);

        p5.fill(roadColor);
        p5.beginShape();
        p5.vertex(this.rightPos.topLeft.x , this.rightPos.topLeft.y);
        p5.vertex(this.rightPos.bottomLeft.x, this.rightPos.bottomLeft.y);
        p5.vertex(this.rightPos.bottomRight.x, this.rightPos.bottomRight.y);
        p5.vertex(this.rightPos.topRight.x, this.rightPos.topRight.y);
        p5.endShape(p5.CLOSE);

        p5.strokeWeight(3);
        p5.stroke('white');
       //Draw dashed line
        var middlePoint = (this.leftPos.bottomLeft.y - this.leftPos.topLeft.y)/2;
        var leftDasshedLine = new dashLine( 
            (width/2 - (width*0.1)),
            this.leftPos.topLeft.y + middlePoint, 
            this.leftPos.topRight.x,
            this.leftPos.topRight.y + middlePoint ,
            10,5);

        leftDasshedLine.show();

        var rightDasshedLine = new dashLine( this.rightPos.topLeft.x, 
            this.rightPos.topLeft.y + middlePoint ,  
            this.rightPos.topRight.x, 
            this.rightPos.topRight.y + middlePoint,
            10,5);
        rightDasshedLine.show();

        p5.strokeWeight(1);
    }

    update(){

        if (T2Passed){
            bridgeOpen = true;
            B1Passed = false;
        } 

        if (T1Passed){
            bridgeCarSignal = true;
        }
        if (B1Passed) {
            bridgeOpen = false;
        }
        if (B3Passed){
            bridgeCarSignal = false;
        }
        //brodgeOpen global variable
        if(bridgeOpen && this.leftPos.topRight.y >= (height*top - maxOpenHeight ) ){
            
            //Left side 
            this.leftPos.topRight.y -=speed;
            this.leftPos.bottomRight.y -= speed;
            this.leftPos.topRight.x -=speed/2;
            this.leftPos.bottomRight.x -= speed/2;

            //Right side 
            this.rightPos.topLeft.y -=speed;
            this.rightPos.bottomLeft.y -= speed;
            this.rightPos.topLeft.x +=speed/2;
            this.rightPos.bottomLeft.x += speed/2;

        }else if ( (!bridgeOpen) && (this.leftPos.topRight.y != this.leftPos.topLeft.y)) {
            
            //Close bridge
            //Left side 
            this.leftPos.topRight.y +=speed;
            this.leftPos.bottomRight.y += speed;
            this.leftPos.topRight.x +=speed/2;
            this.leftPos.bottomRight.x += speed/2;

            //Right side 
            this.rightPos.topLeft.y +=speed;
            this.rightPos.bottomLeft.y += speed;
            this.rightPos.topLeft.x -=speed/2;
            this.rightPos.bottomLeft.x -= speed/2;

        }

    }
}
