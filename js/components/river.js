const width = 1000;
const height = 700;
const riverColor = "#639af2";
const lineWidth = 15;

const T1 = height*0.05;
const T2 = height*0.15;
const T3 = height*0.20;

const B1 = height - height*0.05;
const B2 = height - height*0.15;
const B3 = height - height*0.20;

export default class river {
    constructor(){
        this.pos = { x: (width/2 - (width*0.1)), y: 0 };
    }

    show(){
        p5.noStroke();
        p5.fill(riverColor);
        p5.rect(this.pos.x, this.pos.y,  width*0.2 , height);
        this.drawWater();
        this.drawThresoldLine();
    }

    drawWater(){
        for (var y=30; y<height; y = y + 20){
            for (var x=30; x<width; x = x + 40){
                p5.stroke('white');
                p5.line(x,y, (x + lineWidth), y);
            }
        }
    }

    drawThresoldLine(){
        p5.stroke('green');
        p5.line(this.pos.x, T1, this.pos.x + width*0.2, T1);
        p5.line(this.pos.x, T2, this.pos.x + width*0.2, T2);
        p5.line(this.pos.x, T3, this.pos.x + width*0.2, T3);

        p5.line(this.pos.x, B1, this.pos.x + width*0.2, B1);
        p5.line(this.pos.x, B2, this.pos.x + width*0.2, B2);
        p5.line(this.pos.x, B3, this.pos.x + width*0.2, B3);
    }
}