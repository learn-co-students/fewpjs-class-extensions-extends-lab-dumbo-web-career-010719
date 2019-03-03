// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides;
    }

    get getCount(){
        return this.sides.length;
    }

    get perimeter(){
        let sum = 0;
        for(const number of this.sides){
            sum += number;
        }
        return sum;
    }
}

class Triangle extends Polygon{
    get isValid(){
        if (this.sides.length !== 3){
            return false;
        }
        else if (((this.sides[0] + this.sides[1]) > this.sides[2]) && ((this.sides[0] + this.sides[2]) > this.sides[1]) && ((this.sides[1] + this.sides[2]) > this.sides[0])){
            return true;
        }else{
            return false;
        }
    }
}

class Square extends Polygon{
    get isValid(){
        return (this.sides[0] === this.sides[1]) && (this.sides[2] === this.sides[3]) && (this.sides[0] === this.sides[3]) && (this.sides.length === 4)
    }

    get area(){
        return this.sides[0] * this.sides[1];
    }
}