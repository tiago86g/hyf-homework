class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return 2 * this.radius;
  }
  getCircumference() {
    return (2 * Math.PI * this.radius).toFixed(1);
  }
  getArea() {
    return (Math.PI * this.radius * this.radius).toFixed(1);
  }
}

const circle = new Circle(2);
console.log(`The diameter is ${circle.getDiameter()}`);
console.log(`The circumference is ${circle.getCircumference()}`);
console.log(`The area is ${circle.getArea()}`);

const circle2 = new Circle(4);
console.log(`The diameter is ${circle2.getDiameter()}`);
console.log(`The circumference is ${circle2.getCircumference()}`);
console.log(`The area is ${circle2.getArea()}`);
