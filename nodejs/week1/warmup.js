class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        this.diameter = 2 * this.radius;
        console.log(`The diameter is ${this.diameter}`);
    }

    getCircumference() {

        this.circumference = 2 * Math.PI * this.radius;
        console.log(`The circumference is ${this.circumference.toFixed(1)}`);
    }

    getArea() {
        this.area = Math.PI * Math.pow(this.radius, 2);
        console.log(`The area is ${this.area.toFixed(1)}`);

    }
}

const circle = new Circle(2);
circle.getDiameter();
circle.getCircumference();
circle.getArea();

const circle2 = new Circle(4);
circle2.getDiameter();
circle2.getCircumference();
circle2.getArea();