// Your code here
class Polygon {
  constructor(sidesArr) {
    this.sides = sidesArr
  }

  get getCount(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((total, side) => total + side)
  }
}

class Triangle extends Polygon {
  get isValid() {
    return this.sides[0] + this.sides[1] > this.sides[2] &&
        this.sides[0] + this.sides[2] > this.sides[1] &&
        this.sides[1] + this.sides[2] > this.sides[0]
  }
}

class Square extends Polygon {
  get isValid() {
    return new Set(this.sides).size === 1
  }

  get area() {
    if (this.isValid) {
      return this.sides[0] ** 2
    }
  }
}
