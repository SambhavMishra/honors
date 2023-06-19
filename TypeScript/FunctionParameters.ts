//  optional parameter
//  function function_name(param1[:type], param2[:type],param3?[:type]) 

function product(pid:number, pname:string, quantity?:number) {
    console.log("Product ID: "+pid);
    console.log(("Product Name: "+pname));
    if(quantity != undefined){
        console.log("Quantity: "+quantity);
    }
}

product(101, 'Samsung Mobile');
product(102, "Dell Laptop", 5);

// default parameter 
// function function_name(param1[:type], param2[:type], param3[:type]=default){...}

function estimate_profit(cp:number, sp:number=1000){
    var profit = sp - cp 
    console.log("Profit: "+ profit);
}

estimate_profit(100,200)
estimate_profit(100)


//  REST parameters: You need to prefix ... (three dots) before rest parameter
//  The type of rest parameters shall always be array
//  This paramater should be specified at the last of the declaration
//  For rest parameters you can pass zero or more than one parameters together as well 

// REST parameter:
// function function_type(...rest:type[]){}
function addnumbers(...nums:number[]){
    var sum = 0;
    var i: any; 

    for(i=0; i< nums.length; i++) {
        sum += nums[i];
    }
    console.log("Sum of numbers: "+ sum);
}

addnumbers(11,22,33,44)
addnumbers(22,44,66,88,110)

function getTotal(...numbers:number[]):number{
    let Total = 0;

    numbers.forEach((num) => Total += num);
    return Total;
}

console.log("Total: " + getTotal());
console.log("Total: " + getTotal(10,20,20,30,40,0,10));


