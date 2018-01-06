import { width, height  } from "../constants";

export default class dashedLine{
    constructor(x1, y1, x2, y2, lineWidth, gape ){
        this.startPoint = { x: x1, y: y1};
        this.endPoint = { x: x2, y : y2};
        this.lineWidth = lineWidth;
        this.gape = gape;
    }
    show(){
        let dist = p5.dist(this.startPoint.x, this.startPoint.y, this.endPoint.x, this.endPoint.y);
        let numberOfLines = (dist)/ (this.lineWidth+this.gape);
        // angle in radians
        let angleRadians = Math.atan2(this.endPoint.y - this.startPoint.y, this.endPoint.x - this.startPoint.x);
        
        if (this.startPoint.y != this.endPoint.y){
            let y = this.startPoint.y;

            //For end point high than start point 
            if (this.startPoint.y < this.endPoint.y){
                for (let x= this.startPoint.x; x<this.endPoint.x; x+= dist/numberOfLines ){
                    p5.line(x, y, x + (this.lineWidth * Math.cos(angleRadians)), y + (this.lineWidth * Math.sin(angleRadians)) );
                    y+=(dist/numberOfLines) - this.gape;
                }
            }else if(this.startPoint.y > this.endPoint.y){
                for (let x= this.startPoint.x; x<this.endPoint.x; x+= dist/numberOfLines ){
                    p5.line(x, y, x + (this.lineWidth * Math.cos(angleRadians)), y + (this.lineWidth * Math.sin(angleRadians)) );
                    y-=(dist/numberOfLines) - this.gape;
                }
            }

        }
    }

}