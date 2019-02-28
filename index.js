class Polygon {
  constructor(sidesLength){
    this.sidesLength = sidesLength;
    }

    getCount() {
      let counter = 0
      for (let i = 0; i<this.sidesLength.length; i++) {
        counter ++
      }
      return counter
    }
    perimeter() {
      let counter = 0
      for (let i = 0; i<this.sidesLength.length; i++) {
        counter += this.sidesLength[i]
      }
      return counter
    }
}

class Triangle extends Polygon{
  // constructor(sidesLength){
  //   this.sidesLength = sidesLength
  // }

  isValid() {
    if ((this.sidesLength[0] + this.sidesLength[1] > this.sidesLength[2]) && (this.sidesLength[0] + this.sidesLength[2] > this.sidesLength[1]) && (this.sidesLength[1] + this.sidesLength[2] > this.sidesLength[0])) {
      return true
    } else {
      return false
    }
  }
 }

 class Square extends Polygon {
  area(){
    return this.sidesLength[0] * this.sidesLength[0]
  }

  isValid(){
    if ((this.sidesLength[0]===this.sidesLength[1]) && (this.sidesLength[0]===this.sidesLength[2]) && (this.sidesLength[0]===this.sidesLength[3])){
      return true
    } else {
      return false
    }
  }
 }
