function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  console.log(`The ${this.constructor.name} makes a sound.`);
};

function Dog(name) {
  Animal.call(this, name);
}

const theDog = new Dog("albert");
console.log(theDog);

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

console.log(Dog);

Dog.prototype.bark = function () {
  console.log("Wooff!");
};
