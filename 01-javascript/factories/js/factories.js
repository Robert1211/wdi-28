// Factories

const catFactory = function (n, a, fc) {
  return {
    name: n,
    age: a,
    furColor: fc,
    meow: function () {
      console.log('miaow');
    },
    eat: function (food) {
      console.log(`Yum I love to eat ${ food }`);
    },
    greeting: function () {
      console.log(`Hello my name is ${ this.name }`);
    }
  };
};

const cuteCats = [
    catFactory('Angel', 18, 'grey'),
    catFactory('Evil', 14, 'red'),
    catFactory('Meh', 12, 'white')

		// { name: "Angel", age: 18, furColor: "grey" },
		// { name: "Evil", age: 14, furColor: "red" },
		// { name: "Meh", age: 12, "Fur Color": "white" }

];

for (let i = 0; i < cuteCats.length; i++) {
  console.log( `${ cuteCats[i].name } has ${ cuteCats[i].furColor }` );
}

// Bizarro World: Prototypal Inheritance: Too much magic
// Cat with a capital C denotes that this is a "constructor"
// const Cat = function (n, a, fc) {
//   // calling Cat() in a special way will automatically create a this object
//   this.name = n;
//   this.age = a;
//   this.furColor = fc;
//
//   // No need to return anything.
// };
//
// Cat.prototype.meow = function () {
//   console.log('meow');
// }
