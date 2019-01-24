//-----------------------
// Convert array-like-object to array
//-----------------------

function arrayFrom(arrayLikeObject){
    return [].slice.call(arrayLikeObject);
}

// var divs = document.getElementsByTagName('divs');
// divs.reduce // undefined
// var converted = arrayFrom(divs);
// converted.reduce // function(){}....

//-----------------------
//Sum all even arguments
//-----------------------

function sumEvenArguments(){
    var newArgs = [].slice.call(arguments);

    return newArgs.reduce(function(acc, next){
        if(next % 2 === 0){
            return acc + next;
        }
        return acc;
    }, 0);
}

console.log("-------------Call----------------");
console.log(sumEvenArguments(1,2,3,4)); // 6
console.log(sumEvenArguments(1,2,6)); // 8
console.log(sumEvenArguments(1,2)); // 2
console.log(sumEvenArguments(1,3));//0

//-----------------------
//Apply function num times
//-----------------------
function invokeMax(fn, num){
    var maxed = 0;
    return function(){
        if(maxed >= num) return "MaxedOut!";
        maxed++;
        return fn.apply(this, arguments);
    }
}

function add(a,b){
    return a+b
}

var addOnlyThreeTimes = invokeMax(add,3);
console.log("-------------Apply----------------");
console.log(">>invokeMax:");
console.log(addOnlyThreeTimes(1,2));// 3
console.log(addOnlyThreeTimes(2,2));// 4
console.log(addOnlyThreeTimes(1,2));// 3
console.log(addOnlyThreeTimes(1,2));// "Maxed Out!"



//-----------------------
//Apply function once
//-----------------------
function once(fn, thisArg){
    var hasBeenCalled = false;
    return function(){
        if(!hasBeenCalled){
            hasBeenCalled = true;
            return fn.apply(thisArg , arguments);
        }
    }
}


console.log(">>Once:");
var addOnce = once(add, this);
console.log(addOnce(2,2)); // 4
console.log(addOnce(2,2)); // undefined
console.log(addOnce(2,2)); // undefined

function doMath(a,b,c){
    return this.firstName + " adds " + (a+b+c)
}

var instructor = {firstName: "Elie"}
var doMathOnce = once(doMath, instructor);
console.log(doMathOnce(1,2,3)); // "Elie adds 6"
console.log(doMathOnce(1,2,3)); // undefined

console.log("------------BIND----------------");

//-------------------------------------------
//                  BIND
//-------------------------------------------

function bind(fn, thisArg){
    var outerArgs = [].slice.call(arguments, 2);
    return function(){
        var innerArgs = [].slice.call(arguments);
        var allArgs = outerArgs.concat(innerArgs);
        return fn.apply(thisArg, allArgs);
    }
}


function firstNameFavoriteColor(favoriteColor){
    return this.firstName + "'s favorite color is " + favoriteColor
}

var person = {
    firstName: 'Elie'
}

var bindFn = bind(firstNameFavoriteColor, person);
console.log(bindFn('green')); // "Elie's favorite color is green"

var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
console.log(bindFn2('green')); // "Elie's favorite color is blue" 

function addFourNumbers(a,b,c,d){
    return a+b+c+d;
}

bind(addFourNumbers,this,1)(2,3,4) // 10
bind(addFourNumbers,this,1,2)(3,4) // 10
bind(addFourNumbers,this,1,2,3)(4) // 10
bind(addFourNumbers,this,1,2,3,4)() // 10
bind(addFourNumbers,this)(1,2,3,4) // 10
bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10
console.log("--------------FLIP---------------");

//-----------------------------------
//               FLIP
//-----------------------------------

function flip(fn, thisArg){
    var outerArgs = [].slice.call(arguments,2)
    return function(){
        var innerArgs = [].slice.call(arguments)
        var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)
        return fn.apply(thisArg, allArgs.reverse())
    }
}
function personSubtract(a,b,c){
    return this.firstName + " subtracts " + (a-b-c);
}

var person = {
    firstName: 'Elie'
}

var flipFn = flip(personSubtract, person);
console.log(flipFn(3,2,1)); // "Elie subtracts -4"

var flipFn2 = flip(personSubtract, person, 5,6);
console.log(flipFn2(7,8)); // "Elie subtracts -4"

function subtractFourNumbers(a,b,c,d){
    return a-b-c-d;
}

console.log(flip(subtractFourNumbers,this,1)(2,3,4)); // -2
console.log(flip(subtractFourNumbers,this,1,2)(3,4) );// -2
console.log(flip(subtractFourNumbers,this,1,2,3)(4)); // -2
console.log(flip(subtractFourNumbers,this,1,2,3,4)() );// -2
console.log(flip(subtractFourNumbers,this)(1,2,3,4) );// -2
console.log(flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) );// -2
console.log(flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) );// -2
console.log(flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) );// -22

console.log("---------------------------------");
