/*
Abstraction is simply hiding internal details and showing functionalities. 
It lets us focus on what an object does instead of how it does.

Abstraction can be achieved by two ways:
-> Using abstract class
-> Using interface
*/

abstract class Animal {

    abstract makeSound():void;
    move(): void {
        console.log('Moving...')
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Bark..')
    }
}

const zack = new Dog()
zack.makeSound()
zack.move()


interface Shape {
    getArea(): number;
    getPerimeter(): number;
}

class Circle implements Shape {
    constructor(private radius: number) {}

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

let circle = new Circle(5);
console.log(circle.getArea());      // Outputs area
console.log(circle.getPerimeter()); // Outputs perimeter
