
function specialMultiply1(a,b){
    if(b !== undefined){
        return a * b;
    }
     return function inner(b){
            return a * b;
    }
}
function specialMultiply2(a,b){
    if(arguments.length === 1){
      return function(b){
        return a*b;
      }
    }
    return a*b;
  }

console.log("--------Special Multiply-------------");
console.log(specialMultiply1(3,4)); // 12
console.log(specialMultiply1(3)(4)); // 12
console.log(specialMultiply1(3)); // function(){}....

console.log(specialMultiply2(3,4)); // 12
console.log(specialMultiply2(3)(4)); // 12
console.log(specialMultiply2(3)); // function(){}....

console.log("---------Guessing Game---------------");

function guessingGame(amount){
    var answer = Math.floor(Math.random()*11);
    var guesses = 0;
    var completed = false;
    return function(guess){
        if(!completed){
            guesses++
            if(guess === answer) {
                completed = true;
                return "You got it!";
            }
            else if(guesses === amount) {
                completed = true;
                return "No more guesses the answer was " + answer;
            }
            else if(guess > answer) return "Your guess is too high!";
            else if(guess < answer) return "Your guess is too low!";
        }
        return "You are all done playing!";
    }
}

var game = guessingGame(5);
console.log(game(1)); // "You're too low!"
console.log(game(8)); // "You're too high!"
console.log(game(5)); // "You're too low!"
console.log(game(7)); // "You got it!"
console.log(game(1)); // "You are all done playing!"

var game2 = guessingGame(3);
console.log(game2(5)); // "You're too low!"
console.log(game2(3)); // "You're too low!"
console.log(game2(1)); // "No more guesses the answer was 0"
console.log(game2(1)); // "You are all done playing!"

console.log("-------------------------------------");
