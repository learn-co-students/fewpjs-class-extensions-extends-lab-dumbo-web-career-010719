// Your code here
class Polygon{
    constructor(intArray){
        this.intArray = intArray;
    }

    get getCount(){
        return this.intArray.length
    }

    get perimeter(){
        let result=0;
        this.intArray.forEach(int =>{
                result+=int
        })
        return result
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.getCount === 3){
            if(this.intArray[0]+this.intArray[1]> this.intArray[2] && this.intArray[0]+this.intArray[2]> this.intArray[1] && this.intArray[1]+this.intArray[2]> this.intArray[0]){
                return true
            }
            return false
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.getCount === 4 ){
            if(this.intArray[0]===this.intArray[1] && this.intArray[1]===this.intArray[2] && this.intArray[2]===this.intArray[3]){
                return true
            }
            return false
        }
    }

    get area(){
        return this.intArray[0] ** 2
    }

}