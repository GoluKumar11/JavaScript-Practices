// // console.log("hellojs");
// //thare are two type of data type 
// 1 - premetive//one single value
// 2 - non_premetive  // will more then one value
// 7;
// 2.5;
// //number values
// ('golu');
// ('savan');
// //string values
// true;
// false;
// //boolean values
// null;
// undefined;
//emptyvalue

//  non_premetive
//  Aaray and object


// [1,2,"golu",true,'rahul']  //aaray
//  .0,1,......

// Object

// {
//   key:value
//   golu:yadav
// }



// let firstname ='golu';
// let lastname ='yadav';
// const mobileno = 9142354163;

// console.log('my first name is' ,firstname);
// console.log(lastname);
// console.log(mobileno);


//operator in js

// assigment operator
// let x = 10;
// let y = 22;

// arthimatic operator
// +,-,/,*,%(modelo)

// comparison
// let abc = 22;
// let xyz = 99;

// console.log(abc>xyz);
// console.log(abc<xyz);
// console.log(abc>=xyz);
// console.log(abc=>xyz);


// condition statement
// let rating = 9;
// if (rating==5){
//   console.log('my rating is 5');
// }else if(rating==6){
//   console.log('my rating is 6');
// }
// else if(rating==7){
//   console.log("my rating is 7");
// }
// else{
// console.log("i am else");
// }


//switch case
// let user = 'admin';
// switch(user){
//   case "admin":
//     console.log("redirect him/her to the Admin page");
//     // break;
//     case 'mentor':
//       console.log('redirect him/her to the mentor dashbord');
//       // break;
//       default:
//         console.log('i am simple user');
// }

//ternary operator / ternary condition

// let userLogin = false;

// userLogin ? console.log('logout') : console.log('login');


// Array

// let name = ["golu", "ritesh", "rahul", "shubham"];
// console.log(name);
// console.log(name[3]);

// Object
// let bankaccount ={
//   firstName:'Golu',
//   lastName:'yadav',
//   mobileno:9142354163,
//   blance:1000,
// };
// console.log(bankaccount);
// console.log(bankaccount.blance);


// Date and math

//  let now = new Date();
//  console.log(now.toString());
//  console.log(now.getFullYear());
//  console.log(now.getMonth());

// Math

// const PI = Math.PI;
// console.log(PI);
// console.log(Math.round(PI));

// max  and min
// console.log(Math.min(12,33,7,9,10));
// console.log(Math.max(12,33,7,9,10));

// random 
// console.log(Math.random());//0  - 0.999999999  (0-9)


// lops
/*
let i = 7;
do{
  console.log('value of i is :',i);
  i++;
} while(i<=5);

let j = 7;
while(j<=5){
  console.log('value of j is:',j);
  j++;
}
*/

// for


// for(let i = 0; i <= 5; i++) {
//   console.log('value of i is', i);
// }



// /AARAY METHODS

// let name = ["rahul","vikash","ranjan","shivam"];
// console.log(name);
// console.log(name.length);
// console.log(name[2]);
// console.log(name[name.length -1]);
// name[4] = 'vinay';
// console.log(name);

// push this function to use new aaray in index
// name.push('kamal');
// console.log(name);

// slice  this function are used to (getout value in index)
// let name = ["rahul","vikash","ranjan","shivam"];
// console.log(name.slice(0,2));


// splice  this function are use to insert and replace the value 

// example- 2 ka matlab aaray mai jo value hai uske jagh par new value add karna aur 1 ka matlab yeske bad jo bhivalue bach gaya hai vo isert ho jaye

// let fruit = ['apple','bada apple','chota apple','double apple'];
// fruit.splice(2, 1, 'khrab apple','acha apple');
// console.log(fruit);

// Contcatenation

// let arra1 = [1,2,3,4,5];
// let arra2 = [6,7,8,9,10];
// let arra3 = [6,6,6,6,6];
// console.log(arra1.concat(arra2));
// console.log(arra1.concat(arra2,arra3));

// fill

// let arr4 = [1,2,3,4,5,6,7,8,9];
// arr4.fill('Golu',0,7);
// console.log(arr4);

// includes

// let num = [1,2,3,4,5,6,7,8];
// console.log(num.includes(7,6));
// console.log(num.includes(5,4));

// indexof

// let num = [1,2,3,'Golu',5,6,7,8,9,'Golu','Golu'];
// console.log(num.indexOf(7));
// console.log(num.indexOf("Golu"));

// isArray

// let num = [1,2,3,4,'golu',6,7];
// let num2 = 'aaray';
// console.log(Array.isArray(num));
// console.log(Array.isArray(num2));

// join

// let Arr1 = [1,2,3,4,5,6,7];
// console.log(Arr1.join(' golu '));

//lastindexof

// let num = [1,2,3,'golu',4,5,6,7,8,'komal','komal'];
// console.log(num.lastIndexOf('komal'));
// console.log(num.indexOf('komal'));

// map

// let maths = [1, 4, 9, 16, 25];
// console.log(maths.map(Math.sqrt));
// console.log(maths.map(Math));

// Pop

// let maths = [1, 4, 9, 16, 25];
// console.log(maths.pop());
// console.log(maths);

// reverse

// let maths = [1, 4, 9, 16, 25];
// console.log(maths.reverse());

// shift()

// let maths = ['golu',1, 4, 9, 16, 25];
// console.log(maths.shift());


// unshift

// let fruit = ['apple','bada apple','chota apple','double apple'];
// fruit.unshift('apple1','grapes2');
// console.log(fruit);


// sort

// let name = ["rahul","vikash","ranjan","shivam"];
// console.log(name.sort());

// Converting to Array

// let name = 'golu';
// let Array2 = name.split('');
// console.log(Array2);

// for of

// let fruit = ['apple','bada apple','chota apple','double apple'];
// let upperfruit = [];
// for (const badaletter of fruit){
//   upperfruit.push(badaletter.toUpperCase());
// }
// console.log(upperfruit);

// break and continue

// for(i = 0; i <= 5; i++){
// if(i == 3){
//   continue; //skip
//   // break;
// }
// console.log(i);
// }


// Function in js

// function sum(value1, value2) {  // defination of
//   // let num1 = 16;
//   // let num2 = 20;
//   console.log('addition of two number are:', (value1 + value2));
// }
// sum(10, 20);  // calling of function
// sum(10, 27);
// sum(10, 29);
// sum(10, 23);


// normal function with function argment ya parameter

// function golu(val1, val2) {
//   let result = val1 + val2;
//   return result;
// }

// console.log(golu(33, 77));


// console.log(golu(10, 22));

// let add2 = (15, 22);
// console.log(add2);

// String

// function URL(url,domain) {
//   let Gol = 'https://';
//   let result = Gol + url + domain;
//   return result;
// }

// let golusite = URL ('Goluyadav', '.me');
// console.log(golusite);


// function golu(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// let array1 = golu([1, 2, 3, 4]);
// console.log(array1);



// function Golu() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// }

// console.log(Golu(2, 6, 8, 4, 9));



// let Golu = (var1, var2) => {
//   console.log('i am golu');
// }
// Golu();

// Object

// let userName ={
//   firstname: 'golu',
//   lastname: 'yadav',
//   role:'admin',
//   loginCount:45,

// };
// console.log(userName ['role']);



// for in

// for(let x in userName){
//   console.log(user)
// }



// object 

// const object = {
//   rocket:'🚀',
//   home:'🏠',
// }
// console.log(object.);



// string ,number, bigint ,boolean ,null, undefine,symbol


// const obj1 = {
//   rocket:'🚀',
//   fule:2,
//   config:{
//     name:'mars'
//   }
// }

// obj1.fule = 200
// onj1['year'] = 2000


// part  2


// const obj2 = new Object()  //constructor
// obj2.redbook = '📕'
// obj2.myvalue = '1 blue book'

// console.log(obj2);


// part  3

// const powers = {
//   fly: true,
//   cordinate: Math.random() + 2
// }

// const obj3 = object.creat(powers)
// console.log(obj3);
// console.log(obj3.cordinate);
// console.log(object.getPrototypeof(object));


// part 4

// const obj4 = object.create({})
// object.defineProperty(obj4, 'book',{
//   icon:'❤️',
//   get:() => '📕',
//   Enumerable : true
// }) 

// console.log(obj4);
// console.log(object.getPrototypeof(obj4));

// for(k in obj4){
//   console.log("value is: ", k);
// }


// part 5
// const obj5 ={
//   comics : 'marvel',
//   pen : '',
//   printComic: function(){
//     this.pen += '🖋️📝'
//     console.log(this); 
//     return this;
//   },
//   // printaComic: () => {
//   //   this.pen += '🖋️📝'
//   //   console.log(this);
//   // },
// }
// console.log(obj5.printComic());
// console.log(obj5.printComic());


// prototype

// let myheros = ["thor", "spiderman"]
// let dcheros = ["batman","black adam", "superman"]


// let heropower = {
//   thor: "hammer",
//   spiderman:"sling",

//   getSpiderPower: function(){
//     console.log('spidy power is ${this.spiderman}')
//   }
// }

// Object.prototype.golu = function(){
//   console.log('golu is parsent in all object');
// }

// myheros.golu()


// inheritance

// const user = {
//   name : "top name",
//   email : "aaryankumar54316@gmail.com"
// }
// const teacher = {
//   makevideo : true
// }

// const teachsupport = {
//   isAvilable: false
// }
// const TSAssistant = {
//   makeAssigment: 'js assigment',
//   fulltime: true,
//   __proto__: teachsupport
// }

// teacher.__proto__ = user


// modern syntex

// object.setPrototypeoF(teachingSupport);



// HOF => higer order function
// CALLBACK
// function is calling a function
// Higher order function are function which take other function as a parameter oor returen a function as a value .the function passed as a parameter is called callback.



// function a(){
//   console.log("i was called by a function");
// }

// function b(){
//   a();
// }

//  b();



// mini program
// const callback = (n) => {
//   return n ** 2;
// };

// function cube(callback, n){
//   return callback(n) * n;
// }

// console.log(cube(callback, 2));


// for each
// foreach() is hof , the () =>{} inside it is callback
//  const array = ["hay","hi","hello","hola","namaste"];

// array.forEach(myfunc)
// function myfunc(val) {
//   console.log(val);
// };




//  setTimeOut

// setTimeout(() => {
//   console.log("hello golu kise ho ");
// }, 5000);

// yaaa aise bhi

// function golu(){
//   console.log("hello kise ho");
// }

// setTimeout(golu, 5000)


// setInterval

// setInterval(() => {
//   console.log("😊");
// }, 4000);

// topics of call back

/*
1 - forEach
2-  filter
3-  reduce
4-  every
5-  some
6-  sort
7-  find
8-  map
9-  try
10- catch
11- promises
*/

// map
/*
const numbers = [1,2,3,4,5,6,];
const numSqu = numbers.map((num)=> num * num);
console.log(numSqu);
*/
// filter
/*
const count = ["India","Pakistan","USA","japan","Germany"];
const store = count.filter((val)=> val.includes("any" +  "tan"));
console.log(store);
*/
// Reduce
/*
const num = [1,5,1,4,2,6,7];
const sum = num.reduce((gcc, scc) => gcc + scc, 0);
console.log(sum);
*/
// sort
/*
-golu
-gopal
-ritesh
-shivam
-sonu
-prince
-mansh
*/
/*
const names = ["golu","gopal","ritesh","shivam","sonu"];
console.log(names.sort());
console.log(names.reverse());
*/


// Destructuring and Spread and Rest...
/*
const sci = [2.33,3.65,9,9.81,87,100];
let [e,pi,je,pj,boostrap,inf] = sci;
console.log(e,pi,je,pj,boostrap,inf);

*/
// Spread  ... 

// const arr2 = [1,2,3,4,5,6,7,8];
// let [var1, ,var2] = arr1;
// console.log(var1, var2);
/*

function sumone(x, y){
  return x + y;
}

let vari = [7, 99];

console.log(sumone(...vari));
*/


// and Rest...

// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// let [num1, num2, ...Rest] = arr2;
// console.log(num1, num2);
// console.log(Rest);

// Try and Catch

/*
try{
  let firstName = "Golu";
  console.log(firstName);
  console.log(firstName + "" + lastname);
} catch (err){
  console.log("Variable name missing");
} finally {
  console.log("i will run");
}
*/

// throw => Expoler this topic

// types of error in javaScript
/*
1- ReferenceError
2- SyntaxError
3- TypeError
*/

// Promise log in log out this code
/*
1 - pending
2-  fullfilled
3-  rejected
*/

/*
 const one = () => {
  return "index page";
 };
 const two = () => {
  return new Promise ((resolve, reject) => {
    setTimeout (() => {
      console.log("Credential Correct");
    }, 5000);
  });
 };
 const three = () => {
  return "redicret to home page";
 };

const callMe = async () => {
let Valone = one;
console.log(Valone);

let Valtwo = two;
console.log(Valtwo);

let Valthree = three;
console.log(Valthree);
 };

 callMe();
*/




// Event loop yaa Quye

/*
const userOne = () => {
  console.log("hello one");
};
const userTwo = () => {
  setTimeout(() => {
    console.log(" hello i am two much late");
  }, 5000);
  console.log("hello two");
};
const userThree = () => {
  console.log("hello three");
};

userOne();
userTwo();
userThree();
*/


// +++++++++++++++++++++++++++++++++   DOM   ++++++++++++++++++++++++++++++++++++++


console.log(document)
// console.log(window.document)
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)
// console.log(document.body.firstElementChild)
// let val = document.getElementById("fsjs2")
// console.log(val.innerText)
// console.log(val.innerHTML)
// let val = document.getElementsByClassName("tech")
// console.log(val)
// console.log(val[0].innerHTML)
// console.log(val[0].innerText)
// val[1].innerHTML = "golu"
// val[2].innerHTML = "<h1>hello kise ho</h1>"

// let h1 = document.querySelector("#fsjs2").innerHTML
// console.log(h1)
// let value = document.querySelector("p").style.backgroungColor = "red"















