//string
let a="jonny  ";
let b="hi i am 'sasi'";
console.log(a+b);

//template string using backticks

let c=`my name don't know "my patents also do know"`;
console.log(c);

//string lemngth
let d=c.length
console.log("length of the string:"+d);

//string usin escape character
 let ab= `hello my name is\"sasiprakash\" \n i am working in sparkout\ttech`;
 console.log(ab);
//break lines
let sp="heklllo world my word "+
"today my dutyis farmering lands ";
console.log(sp)


//string as object
let my="hello world";
let he=new String("my world");
console.log(typeof(sp),typeof(he));

//string interpolation
 let sasi="sasi";
 let prakash="prakash";

 console.log(`welocme ${sasi},${prakash}`);

 //experss sbustiton
 let num1=20;
 let num2=30;
 let num=`total:${(num1*(1+num2)).toFixed(2)}`;
 console.log(num)




 //string methods
 //1.charat
 let m="hello world 👍";
 console.log("index valuie:"+m.charAt(6));
 //2.charcode at
 console.log("specied index value:"+m.charCodeAt(12));
 //3.codepoint
 console.log("nueric valu in unique standard:"+m.codePointAt(12));

 //4.property access
 console.log("property access value:"+m[3]);
let nm={name:"sasi",class:"i maca"};
console.log(nm.name);
//contact to merge strings
let v=" \.ud.o91.41.09";
console.log(m.concat("",v));
//slice
console.log("sliced character:"+v.slice(3,5));
//substring
console.log("sliced character:"+v.substring(3,5));
//substr
console.log("sliced character:"+v.substr(0,4));
//is welformed
console.log("string wellformed:"+v.isWellFormed());


//string padding
let sk=5;
let siv=sk.toString().padStart(3,"0");
console.log(siv);

//string replace
let sh="visit my webpage";
let newsh=sh.replace("webpage","school");
console.log(newsh);

//string conver into array
//1.split
let gow="string";
const ft=gow.split("");
console.log(ft);