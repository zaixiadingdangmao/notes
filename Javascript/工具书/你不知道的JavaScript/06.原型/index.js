// function Foo() {
//   // ...
// }

// let a = new Foo();

// console.log(
//   '🚩  -> file: index.js:6 -> a.__proto__ === Object.getPrototypeOf(a);:',
//   a.__proto__ === Object.getPrototypeOf(a)
// );

/****************  ****************/

var foo = {
  something: function () {
    console.log('Tell me something good...');
  }
};
var bar = Object.create(foo);
bar.something(); // Tell me something good..
