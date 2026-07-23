//default destructing
const userProfile = ['John Doe', 28, 'Developer', ['JavaScript', 'Python']];


const [name, age, profession, languages] = userProfile;

console.log( name);
console.log("Age:", age);
console.log("Profession:", profession);
console.log("Languages:", languages);
console.log(typeof(userProfile));
//skip elements
let numeber=[1,3,4,5,6,7];
let[a,,,,d]=numeber;
console.log(a);
console.log(d);
//resetoperator
let num=["sasi","prakash","sarath","kumar"];
let [first,...rest]=num;
console.log(first);
console.log(rest);