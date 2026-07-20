//for loop
for(let i=5;i<=20;++i)
{
    console.log("print  the numnber" + i);
}
//while 

let i=1;
while(i<=4)
{
    console.log("the number is "+i);
    i++;
}

//dowhile 
 let j=2;
do{
    console.log("the given number is correct:"+j);
    j++;
}
while(j<=10);
//break statement
let x=10;
 for(x=0;x<=8;x++){
 {
   
    if(x==5)
        break;
 }
  console.log("the value statifies"+x);
}
//label 
loop1:for(let a=0;a<10;a++)
{
    loop2:for(let b=2;b<=5;b++){
        if(a==3){break loop1;}
        console.log("corrected"+a)
        {

        }
    }
}

//continue

for(let c=3;c<=5;c++){
    if(c==2)
        continue;
    console.log(c);
}