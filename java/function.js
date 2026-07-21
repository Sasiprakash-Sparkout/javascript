/* function
function operator(a1=2,b1){
    console.log(a1*b1);
  }
  operator(10,5);
  operator(4);
 */

/* function to display odd or even
 function oddeven(a){
    if(a%2==0){
        console.log("even number");
    }
    else{
        console.log("odd number");

    }

 }
oddeven(4); 
assign a function as variable to store 
let oddoreven=oddeven;
console.log(oddeven(4)); */



/* //create a variable as a function
let oddeven=function (a){
     if(a%2==0){
       return "even number";
    }
    return "odd number";
}
 console.log(oddeven(2));  */

//create an arrow function
/* let oddeven = (a) => {
    if (a % 2 == 0) {
        return "even number";
    }
    return "odd number";
}
console.log(oddeven(2)); */

//arrow function in single line 
//let oddeven = (a) => (a % 2 == 0) ? "even" : "odd";
//console.log(oddeven(3));

//finction call back

/* function oper(calc,a,b){
    return calc(a,b);
}
let add=(a,b) =>a+b;
let sub=(a,b)=>a-b;
console.log(oper(add,112,1)); 


let multiply= (a,b=5)=>a*b;
console.log(multiply(4));
//reset parameter

function reset(...names){
    console.log(names);
}
reset("sasi,prakash,sarath");*/
"use strict"
function test() {
    name = "Sasi";
}

test();

console.log(name);