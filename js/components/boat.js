import boatImg from '../../assets/boat.png';

const width = 1000;
const height = 700;

const T1 = height*0.05;
const T2 = height*0.15;
const T3 = height*0.20;

const B1 = height - height*0.05;
const B2 = height - height*0.15;
const B3 = height - height*0.20;

export default class boat{
    constructor(){
        this.img = p5.loadImage(boatImg);
        console.log("Image loaded");
        this.pos = { x: (width/2 - (width*0.05)), y: 0 - height*0.2};
    }

    show(){
        p5.image(this.img, this.pos.x, this.pos.y, width*0.1, height*0.2 );
    }

    update(){
        let bottom = this.pos.y + height*0.2;
        let top = this.pos.y; 

        if (emergency){
            p5.stroke('red');
            p5.strokeWeight(3);
            p5.line(this.pos.x, this.pos.y , this.pos.x + width*0.1, this.pos.y + height*0.2);
            p5.line(this.pos.x + width*0.1 , this.pos.y , this.pos.x, this.pos.y + height*0.2);
            p5.strokeWeight(1);
        }else {
            if(this.pos.y >= height + height*0.2){
                this.pos.y = 0-height*0.2;
            }else{
                this.pos.y += 10;
            }
        }
    }

    //Get current location
    getPos(){
        return this.pos;
    }

}