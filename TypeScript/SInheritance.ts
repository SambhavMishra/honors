// import { kgsearch } from "googleapis/build/src/apis/kgsearch";

class Car {
    color: string;
    constructor(color:string) {
        this.color = color;
    }
}

class BMW extends Car {
    price: number;
    constructor(color:string, price:number) {
        super(color);
        this.price = price;
    }
    display():void {
        console.log("Color of BMW: "+ this.color);
        console.log("Price of the BMW: "+this.price);
    }
}

let obj = new BMW("Gray", 5000000)
obj.display()

class BMWX1 extends BMW {
    launched: number; 
    constructor(color:string, price: number, launched: number) {
        super(color,price);
        this.launched = launched
    }
    display():void {
        console.log(this.color);
        console.log(this.price);
        console.log(this.launched);
        
    }
}


let obj1 = new BMWX1("Black",500000,2010);
obj1.display()