const prompt = require("prompt-sync")({ sigint: true });

const num = prompt("Enter your card number? ");

let sum=0;
let sum1=0;

let num2;

let mul_num;

let int_num1;
let int_num2;




if(num.length==15){
  console.log(" American Express ");
}

else if(num.length==16){
  console.log(" Master Card  ");
}
else if(num.length==13 || num.length==16){
  console.log(" Vissa ");
}

for( var i=0 ; i<num.length ; i+=2){
  //int_num1=parseInt(num[i])
  mul_num= num[i]*2;
  if(mul_num>9){
    mul_num -=9;
  }

  num2 =num2 + mul_num;
  sum= sum+mul_num;

}
console.log(mul_num)
console.log(sum)

for( var i=1 ; i<num.length ; i+=2){
  int_num2=parseInt(num[i])
  
  sum1=sum1+ parseInt(num[i]);
 
 
}
console.log(int_num2)
console.log(sum1)
let total= sum+sum1;

console.log(total)

if(total % 10 ==0){
  console.log("Valid Number")
}

else{
  console.log("Invalid Number")
}



