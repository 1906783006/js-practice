function Animal() {
    this.animalName = 'animal';
    this.color = ['red', 'blue'];
}

Animal.prototype.animalFunction = function () {
    console.log(this.animalName);
}

function Person() {
    // 经典继承, 还可以进行传递参数
    Animal.call(this);
    this.personName = 'person';
}

// 原型继承
// Person.prototype = new Animal();

Person.prototype.personFunction = function() {
    alert(this.personName);
}

const person1 = new Person();
const person2 = new Person();

person1.color.push('yellow');

person1.animalFunction();
// console.log(person1.color, person2.color);
