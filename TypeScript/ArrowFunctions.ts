// When you use the => function you don't need to specify the function 

let sum = (x:number, y:number):number => {
    return x+y;
};

console.log(sum(12,24));

let sum2 = (x:number, y:number):number => x+y;
console.log(sum2(12,24));


let scorecard = (name:string, points:number):string =>{
    return name + ' scored ' + points + ' points.';
}

console.log(scorecard("Sambhav",100));



let result = ():string =>{
    return "India played a good game."
}

console.log(scorecard("Sambhav",100));

console.log(result());