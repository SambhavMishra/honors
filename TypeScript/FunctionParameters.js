//  optional parameter
//  function function_name(param1[:type], param2[:type],param3?[:type]) 
function product(pid, pname, quantity) {
    console.log("Product ID: " + pid);
    console.log(("Product Name: " + pname));
    if (quantity != undefined) {
        console.log("Quantity: " + quantity);
    }
}
product(101, 'Samsung Mobile');
product(102, "Dell Laptop", 5);
// default parameter 
// function function_name(param1[:type], param2[:type], param3[:type]=default){...}
function estimate_profit(cp, sp) {
    if (sp === void 0) { sp = 1000; }
    var profit = sp - cp;
    console.log("Profit: " + profit);
}
estimate_profit(100, 200);
estimate_profit(100);
//  REST parameters: You need to prefix ... (three dots) before rest parameter
//  The type of rest parameters shall always be array
//  This paramater should be specified at the last of the declaration
//  For rest parameters you can pass zero or more than one parameters together as well 
// REST parameter:
// function function_type(...rest:type[]){}
function addnumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    var i;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log("Sum of numbers: " + sum);
}
addnumbers(11, 22, 33, 44);
addnumbers(22, 44, 66, 88, 110);
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var Total = 0;
    numbers.forEach(function (num) { return Total += num; });
    return Total;
}
console.log("Total: " + getTotal());
console.log("Total: " + getTotal(10, 20, 20, 30, 40, 0, 10));
