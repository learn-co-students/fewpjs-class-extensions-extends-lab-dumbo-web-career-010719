// Your code here

class Polygon {
  
  constructor(arr) {
    this.sides = arr;
  }

  get getCount() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((count, curr) => count + curr, 0);
  }
}

class Triangle extends Polygon {

  get isValid() {
    return (this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[2] + this.sides[1] > this.sides[0]) && (this.sides[0] + this.sides[2] > this.sides[1])
  }
}

class Square extends Polygon {

  get isValid() {
    return this.sides[1] == this.sides[2] && this.sides[2] == this.sides[3] && this.sides[3] && this.sides[3] == this.sides[0];
  }

  get area() {
    return Math.pow(this.sides[0], 2);
  }
}