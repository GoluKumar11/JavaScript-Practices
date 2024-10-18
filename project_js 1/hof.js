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

 const array = ["hay","hi","hello","hola","namaste"];

array.forEach(myfunc)
function myfunc(val) {
  console.log(val);
};














