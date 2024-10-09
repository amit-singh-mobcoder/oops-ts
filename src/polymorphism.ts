class Example {

    /* function declaration */
    add(a: number, b: number):number;
    add(a: string, b: string):string; // method add is overloaded by providin different parameter type and return type

    /* function definition */
    add(a: any, b: any){
        return a+b;
    }


    /*
    like this you cannot implement method overriding
    Error in code: duplication function implementation 

    mult(a: number, b: number):number {
        return a*b;
    }
    mult(a: number, b: number, c: number):number{
        return a*b*c;
    }
    */
}

const obj = new Example();

console.log(obj.add(2, 5))
console.log(obj.add("alex", "james"))


class Laptop {
    getOs(): void{
        console.log("operating system")
    }
}

class Macbook extends Laptop {
    getOs(): void {
        console.log("mac os")
    }
}

class HpLaptop extends Laptop {
    getOs(): void {
        console.log("window 11")
    }
}

const ob1 = new Laptop();
const ob2 = new Macbook();

ob1.getOs() // operation system
ob2.getOs() // mac os



