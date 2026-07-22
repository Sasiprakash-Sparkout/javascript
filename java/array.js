/* //array
let veg=new Array();//or [] or['carrot','beetroot'];
veg=['carrot','beetroot','ladies finger'];
//add a item in array
veg[1]='potato';
//add an item by function push 
veg.push('tomato');
//remove an item in array by using function
//console.log(veg.pop());
console.log(veg.shift());
console.log(veg);
  

//2 dimensional array
let mat=[[1,2,3],
[4,5,6],[7,8,9]];

for(let i=0;i<mat.length;i++){
    for(j=0;j<mat[i].length;j++){
console.log(mat[i][j]);     
    }
    
}  */ 
let num=[40,55,40,70];
//let f=num.find(x=>x>12);
//let f=num.filter(x=>x%4==0)
//for each
//num.forEach(n=>console.log(n));
let np=num.map(n=>n*n);
console.log(np);
let sum=num.reduce((av,v)=>av+v);
console.log(sum);
 let a=num.some(a=>a<40);
 console.log(a);
 let b=num.every(every=>every);
