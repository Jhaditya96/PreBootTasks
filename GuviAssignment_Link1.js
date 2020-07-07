TASK-1

1.Declare four variables without assigning values and print them in console?
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here

let w,x,y,z;
console.log(w)
console.log(x)
console.log(y)
console.log(z)

//end-here
});


2.How to get value of the variable myvar as output?
var myvar= 1;
console.log("myvar");
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
var myvar= 1;
console.log("myvar",myvar);
//end-here
});


3.Declare variables to store your first name, last name, marital status, country and age in multiple lines?
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
let fname="Adam";
let lname="winchester";
let age=16;
let country="USA";
let maritalStatus="Unmarried";

console.log(fname+"\n"+lname+"\n"+age+"\n"+country+"\n"+maritalStatus)

//end-here
});


4.Declare variables to store your first name, last name, marital status, country and age in a single line?
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
let fname="Adam";
let lname="winchester";
let age=16;
let country="USA";
let maritalStatus="Unmarried";

console.log(fname+" "+lname+" "+age+" "+country+" "+maritalStatus)

//end-here
});


5.Declare variables and assign string, boolean, undefined and null data types?
I am 25 years old. 
You are 30 years old.
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here

let x = "I am 25 years old."
let y = Boolean(10>9);
let z;
let w = null;
console.log(w+"\n"+x+"\n"+y+"\n"+z)
//end-here
});


6.Convert the string to integer
>parseInt()
>Number()
>Plus sign(+)
A.Using parseInt().
->Code:
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
let a = "10";
let b = "15";
let c = parseInt(a)+parseInt(b);
console.log(c)
//end-here
});


7.Write 6 statement which provide truthy & falsey values.
A.function logTruthiness (val) {
    if (val) {
        console.log("Truthy");
    } else if(!val) {
        console.log("Falsy");
    }
}

//Truthy List:
logTruthiness("some string");

logTruthiness(3.14);

logTruthiness(new Date());

//This list contains all possible Falsy everything else is Truthy
logTruthiness(false);

logTruthiness(null);

logTruthiness(undefined);

logTruthiness(NaN);

logTruthiness(0);

logTruthiness("");


----------------------------------
TASK-2

1.Square of a number?
A.const readline = require('readline'); 
const inp = readline.createInterface({ input: process.stdin }); 
const userInput = []; 
inp.on("line", (data) => { userInput.push(data); }); 
inp.on("close",() =>
{ 
//start-here 
//let x = userInput[0]
let y = 15;
console.log("Square of a  number is:",y*y);
//end-here 
});


2.Swapping 2 numbers?
A.const readline = require('readline'); 
const inp = readline.createInterface({ input: process.stdin }); 
const userInput = []; 
inp.on("line", (data) => { userInput.push(data); }); 
inp.on("close",() =>
{ 
//start-here 
//let x = userInput[0]
let x = 15;
let y =20;
console.log("Before swapping x and y are:",x,y)
x = x+y;
y = x-y;
x = x-y;
console.log("After swapping x and y are:",x,y)
//end-here 
});


3.Addition of 3 numbers?
A.const readline = require('readline'); 
const inp = readline.createInterface({ input: process.stdin }); 
const userInput = []; 
inp.on("line", (data) => { userInput.push(data); }); 
inp.on("close",() =>
{ 
//start-here 

let x =15
let y = 20
let z = 34
console.log("Sum of three numbers is:",x+y+z)
//end-here 
});




4.Celsius to Fahrenheit conversion?
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
let a = userInput[0];
let far = ((a*9) /5) + 32;
console.log("Celcius to farenheit:",far)
//end-here
});


5.Meter to miles
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
let a = userInput[0];

console.log("The distance in metres is given by user is:",a)
console.log("The distance converted in miles is:",a*0.000621)
//end-here
});


6.Pounds to kg
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
let a = userInput[0];

console.log("The weight in pounds is given by user is:",a)
console.log("The weight converted in pounds is:",a*0.453592)
//end-here
});


7.Calculate Batting Avg
A.const readline = require('readline'); 
const inp = readline.createInterface({ input: process.stdin }); 
const userInput = []; 
inp.on("line", (data) => { userInput.push(data); }); 
inp.on("close",() =>
{ 
//start-here 
let bat1 = 32
let bat2 = 41
let bat3 = 67
let bat4 = 87
let bat5 = 95
let bat6 = 45
let bat7 = 76
let bat8 = 52
let bat9 = 31
let bat10 = 141

console.log("The batting avg is:",(bat1+bat2+bat3+bat4+bat5+bat6+bat7+bat8+bat9+bat10)*0.1)
//end-here 
});




8.Calculate five test scores and print their average
A.const readline = require('readline'); 
const inp = readline.createInterface({ input: process.stdin }); 
const userInput = []; 
inp.on("line", (data) => { userInput.push(data); }); 
inp.on("close",() =>
{ 
//start-here 
let test1 = 32
let test2 = 41
let test3 = 67
let test4 = 87
let test5 = 95

console.log("The result is:",(test1+test2+test3+test4+test5)*0.2)
//end-here 
});




9.Power of any number x ^ y?
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
console.log("Enter your number and power to which you want to calculate respectiverly:")
let x = userInput[0];
let y = userInput[1];
let z = Math.pow(x,y);
console.log("Your answer is:",z);
//end-here
});

10.Calculate Simple Interest?
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
let p = userInput[0];
let r = userInput[1];
let t = userInput[2];

console.log("Enter principle,rate and time to calculate your simple interest as input respectively in diffrent lines:");
let SI = (p*r*t)/100;
console.log("The result is:",SI);
//end-here
});

11.Calculate area of an equilateral triangle?
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here

let a= 5  
let area = ( 1.73 * a*a) / 4  
console.log("Area of Equilateral Triangle is: ",area);  

//end-here
});

12.Area Of Isosceles Triangle
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area.toFixed(2));
//end-here
});

13.Volume Of Sphere
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
  let volume;
  var radius = userInput[0]
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(2);
  console.log("Volume of sphere is:",volume)
//end-here
});

14.Volume Of Prism
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here

let l = userInput[0];
let b = userInput[1];
let h = userInput[2];
console.log("Entered l,b,h in input is:",l,b,h);
let area = (l*b*h)/2;
console.log("Area of triangular prism is:",area);
//end-here
});

15.Find area of a triangle
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
console.log("Enter base and height of isoscles triangle respectively:")
let b = userInput[0];
let h= userInput[1]
let area = (b*h)/2;
console.log("Area is:",area)
//end-here
});

16.Give the Actual cost and Sold cost, Calculate Discount Of Product
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
let ac = userInput[0];
let sc = userInput[1];
console.log("Entered actual cost and sold cost is:",ac,sc);
let dis = ac - sc;
let disper = (dis/ac)*100;
console.log("The discount and discount% is:",dis,disper.toFixed(2)+"%")
//end-here
});

17.Given their radius of a circle and find its diameter, circumference and area.
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here

let rad = userInput[0];
console.log("The diameter of circle is:",2*rad);
console.log("The circumference is:",(2*Math.PI*rad).toFixed(2));
console.log("The area is:",(Math.PI*rad*rad).toFixed(2));
//end-here
});

18.Given two numbers and perform all arithmetic operations.
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
let a =16;
let b = 4;
console.log("Addition:",a+b);
console.log("Subtraction",a-b)
console.log("Multiplication",a*b)
console.log("Division",a/b)
console.log("Modulus",a%b)
console.log("Increment",++a)
console.log("Decrement",--b)

//end-here
});

19.Display the asterisk pattern as shown below(No loop needed):
*****
*****
*****
*****
*****
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
function countDown(fromNumber) {
    console.log("*****");

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(5);

//end-here
});


20.Calculate electricity bill?
   For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that
   consumer if per unit rate is 10?
A.const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
let x = userInput[0];
let y = userInput[1];
let totwattperhr = x*24*30;

let totUnits = totwattperhr/1000;

let cost = totUnits*y;

console.log("The watt load per hr for user is :",x)
console.log("The cost per unit is:",y)
console.log("The cost of Electricity bill is(1unit = 1000Wh):",cost)

//end-here
});


