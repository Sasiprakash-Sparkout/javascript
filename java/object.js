 /* /* /* // declare an object
let bike = {
    name: "hunter",
    brand: "royal enfield",
    drive: "petrol",
    price: 2,
    // define a function inside an object
    onroadprice(price){
      return  this. price+2;  
    }
};
/* //single property to display
console.log(bike.brand);
// delete a property 
delete bike.drive;
console.log(bike);
// add a property
bike['modelyear'] = 2024;
console.log(bike);
//modify a property value
bike.name = "thuderbird"; 
console.log(bike.onroadprice());
  */
/* let obj={name:"sasi",
    age:21
};
console.log(obj);
obj.name="sasiprakash s";
console.log(obj);

console.log('name' in obj);
//acess a key value by using in operator
for(key in obj){
    console.log(key+'-'+obj[key]);
} 
//object reference
let a={name:"sasi",
    age:23
}
let b=a;
console.log(a);
a={};
console.log(b); */

 