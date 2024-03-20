// console.log("hi hello world!");
//function declarations
function findSum(a,b){
    return a+b;
}

//function expressions
let findSum1=function(a,b){
    return a+b;
}

//arroq function
let findSum2=(a,b)=>a+b;

console.log(findSum(10,20));
console.log(findSum1(100,200));
console.log(findSum2(20,30));