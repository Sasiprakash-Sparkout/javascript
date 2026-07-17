let a="sasi";
console.log(a)    
        
const n="my name",dept="cs",roll="21";
console.log(n,dept,roll)
//functio or global scope
var w=40;
var w=30;
var w=35;
w=w+w;
console.log(w);
//finction scope fo const and let not give same variable name 
var sasi=1;
var sasi=10;
sasi=sasi+sasi;
console.log(sasi);

//const element change
const car=["audi","bmw","i20","i10"];
car[0]="thar";
car.pop("bmw");
car.push("volvo");

console.log(car);

//javascript arthmetic operators
//ex 7+5=18 5,7 is operands + is an operator


//unary operator
let d=-10;
d=d;
console.log(d);

//binary operator +,-,*,/,% ,**
let pr=12;
let sp=2;
let sum1=pr**sp;
console.log(sum1);


//operator presendecy
let hr=20,br=30,sr=50;
let sh=20+30/50;
console.log("operatorpresedency"+sh);


//assignment operator
let ab=20;
 ab *=20;
 console.log("assignment"+ab)

 //assigmnent logical operator &&-and,||-or,??-not
 let f2=15;f3=10,f4=20,f5=20;
 let result=(f2<f3)??(f4===f5);
 console.log(result);
 
 // comparsion operator
 let res1=f2<f5;
 console.log(res1);