const width = 1000;
const height = 800;
const riverColor = "#639af2";


export default class river {
    constructor(){
        this.pos = { x: (width/2 - (width*0.1)), y: 0 };
    }

    show(){
        p5.noStroke();
        p5.fill(riverColor);
        p5.rect(this.pos.x, this.pos.y,  width*0.2 , height);
    }
}