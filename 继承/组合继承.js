function Animal(age) {
    this.animalName = 'animal';
    this.color = ['red', 'blue'];
    this.age = age;
}

Animal.prototype.animalFunction = function () {
    console.log(this.animalName, this.age);
}

function Person(name, age) {
    Animal.call(this, age);
    this.personName = name;
}

Person.prototype = new Animal(0);

Person.prototype.personFunction = function() {
    alert(this.personName);
}

const person1 = new Person('liyang', 16);
const person2 = new Person('wanggang', 18);

person1.color.push('yellow');

person1.animalFunction();
// console.log(person1.color, person2.color);
