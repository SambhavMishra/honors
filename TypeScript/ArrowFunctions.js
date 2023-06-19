// When you use the => function you don't need to specify the function 
var sum = function (x, y) {
    return x + y;
};
console.log(sum(12, 24));
var sum2 = function (x, y) { return x + y; };
console.log(sum2(12, 24));
var scorecard = function (name, points) {
    return name + ' scored ' + points + ' points.';
};
console.log(scorecard("Sambhav", 100));
var result = function () {
    return "India played a good game.";
};
console.log(scorecard("Sambhav", 100));
console.log(result());
