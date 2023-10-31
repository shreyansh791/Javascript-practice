var x = 100;
console.log(x);

var browserName = "chrome"
var browserName = "ff" // re-declaring and re-initialization
console.log(browserName); // prints ff

//  issue with var keyword
var name = "hey shreyansh"
var y = 10;
if (y > 5) {
    var name = "hey abhishek"
}
console.log(name) // prints hey abhishek




//  issue with var keyword
var y = 10;
if (y > 5) {
    var name = "hey tom"
}
// name is getting printed as expected even though declared inside the block
console.log(name) // prints hey tom
console.table([name])

/*
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])*/