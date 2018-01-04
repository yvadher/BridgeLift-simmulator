import boatImg from '../../assets/boat.png';

const width = 1000;
const height = 800;

export default class boat{
    constructor(){
        this.img = p5.loadImage(boatImg);
        console.log("Image loaded");
        this.pos = { x: (width/2 - (width*0.5)), y: 0 };
    }


    show(){
        p5.image(this.img, this.pos.x, this.pos.y, width*0.1, height*0.2 );
    }

}