// Declarative function
function fun()
{
    console.log("its a fun to learn JS functions")
}
fun()

// Anonymous function
var anonymousFunction = function()
{
    console.log("its a fun to learn Anonymous JS functions")
}
anonymousFunction()

// ES6 function syntax or arrow function

var arrowFn = ()=>{
    console.log("its a fun to learn arrow functions")
}
arrowFn()

function printName(firstName,lastName)
{
    console.log(firstName,lastName)
}
printName('S','J')

import { printAge  } from '../JS Fundamentals/helper/helper.js'
printAge(25)

import * as utils from '../JS Fundamentals/helper/helper.js'
utils.printAge(25)

// importing class
import { customerDetails } from "../JS Fundamentals/helper/helper.js";
customerDetails.printName('Sarjit')
