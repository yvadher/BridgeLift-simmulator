import * as constants from '../constants';
import policeCar from '../../assets/police.png';
import sportCar from '../../assets/sports-car.png';


const width = constants.width;
const height = constants.height;

const top = 0.43;
const bottom = 0.58;

export default class car{
    constructor(direction){
        this.dir = direction;

        this.imgPoliceCar = p5.loadImage(policeCar);
        this.imgSportsCar = p5.loadImage(sportCar);
        this.pos = { x: 0, y: height/2 + 8 };
        this.carWidth = 60;
        this.carHeight = 35;
        if (this.dir == 'left') this.pos.x = width;

        this.carRight = this.pos.x + this.carWidth;
        this.signalLeft = (width/2 - (width*0.1)) - 20;
        this.signalRight = (width/2 + (width*0.1)) + 20;
    }

    show(){
        if (this.dir == 'right'){
            this.pos.y = height/2 + 8;
            p5.image(this.imgSportsCar, this.pos.x, this.pos.y,this.carWidth, this.carHeight );
        }else if (this.dir == 'left'){
            this.pos.y = height*top + 10;
            console.log(this.pos.x);            
            p5.image(this.imgPoliceCar, this.pos.x, this.pos.y,this.carWidth, this.carHeight );
        }
    }
    update(){
        if (this.dir == 'right'){
            var carRight = this.pos.x + this.carWidth;
            if ( bridgeCarSignal && (carRight > this.signalLeft - 10) && (carRight < this.signalLeft + 5)){
                console.log("stop!!");
            }else {
                this.pos.x += 4;
            }

            if (carRight > width){
                this.pos.x = -50;
            }
        }else if (this.dir == 'left'){
            var carLeft = this.pos.x ;
            if ( bridgeCarSignal && (carLeft < this.signalRight + 10) && (carLeft > this.signalRight - 5)){
                console.log("stop!!");
            }else {
                this.pos.x -= 4;
            }

            if (carLeft < 0){
                this.pos.x = width + 50;
            }
        }
        
    }
}