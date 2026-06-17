//q1 function declaration
function func1(num){
    return num*num;
}

//q2 function expression - storing function inside a variable 
const square  = function(num){
    return num*num;
}

//q3 first class function - a language where a function can be treated like variable their function are called FCF 
 
function displaySq(fn){
    console.log("the square is" + fn(5))
}

// displaySq(square);

//q4 IIFE - immediately invoked function expression, is a function that runs immediately after it is defined.”

// (function rect(x){
//     console.log(x)
// })(5)

//q5 Function scope - Function scope means that variables declared inside a function are only
//  accessible within that function and not outside.


// q6 shadowing - Shadowing occurs when a variable declared in an inner scope has the same name as a variable 
// in an outer scope, thereby overriding access to the outer variable within that scope.

function test (){
    var a = "hello";
    {
        let a = "hi"
        console.log(a)

    }
    console.log(a)
}
// test() //result - hi hello

// illegal shadowing - when you try to shadow let variable with a var variable

// function illShadow(){
//     let a = "let";
//     {
//         var a = "var";
//         console.log(a)

//     }
//     console.log(a)

// }. it gives a variable already declared error


//q7 Hoisting - Before the executed the code js initialises the variables as undefined especially var and is moved at top of scope 

function hoist(){
    console.log(a)
    var a = 5;
    console.log(a)
}
// hoist()


// q8 spread and rest operator

function multiply(...num){ // rest operator
    console.log(num[0] * num[1]);
}

var nums = [5,6]

// multiply(...nums) //spread operator 

//  q9 callback function - it is an function which is passed into an another function as a argument and then it is 
//  invoked inside the outer function to perform some action


// arrow function
const hello = ()=>{
    console.log("hello")
}
hello()









