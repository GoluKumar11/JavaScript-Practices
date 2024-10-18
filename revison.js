// let a = 10;
// let b = '10';
// console.log(a === b);


//  object 

// const golu = {
//   keyvalu: 33,
//   keymarka: 56,

// };

// golu.keyvalu = 500;
// console.log(golu);
// console.log(golu.keymarka);

// const vikash = new object()
// vikash.rohan = 'hello'
// vikash.kohan = 'hello'
// console.log(vikash);



// const obj1 = Object.create({})
// Object.defineProperty(obj1, 'book', {

//   get: () => '📕',
//   enumerable: true

// })
// console.log(Object.getPrototypeOf(obj1.book));

// for (k in obj1) {
//   console.log("value is :", k);
// }



const obj5 = {
  comic: 'marvals',
  pen: '',
  printComic: function () {
    this.pen += '🖋️'
    console.log(this);
    return this;
  },

  // printaComic: () => {         this. property are naver used in arow function only used in normal function
  //   this.pen += '🖋️'
  // },
}

console.log(obj5.printComic());
console.log(obj5.printaComic());
