// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = sides.length
  }

  get getCount() {
    return this.count
  }

  get perimeter() {
    return this.sides.reduce((accum, i) => accum + i)
  }
}

class Triangle extends Polygon {

  get isValid() {
    const a = this.sides[0]
    const b = this.sides[1]
    const c = this.sides[2]
    return (this.getCount === 3 && (a+b > c && a+c > b && b+c > a) )
  }

}

class Square extends Polygon {
  get isValid() {
    return (this.getCount === 4 && this.sides.every(val => val === this.sides[0]))
  }

  get area() {
    return this.sides[0] ** 2
  }
  
}
