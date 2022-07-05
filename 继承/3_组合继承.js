function Animal(age) {
    this.animalName = 'animal';
    this.color = ['red', 'blue'];
    this.age = age;
}

Animal.prototype.animalFunction = function () {
    console.log(this.animalName, this.age);
}

function Person(name, age) {
    // 1. 调用父类构造函数
    Animal.call(this, age);
    this.personName = name;
}

// 2. 讲父类实例化作为子类原型
Person.prototype = new Animal(0);

Person.prototype.personFunction = function() {
    alert(this.personName);
}

const person1 = new Person('liyang', 16);
const person2 = new Person('wanggang', 18);

person1.color.push('yellow');

person1.animalFunction();
console.log(person1.color, person2.color); // ['red', 'blue', 'yellow'], ['red', 'blue']

/** 优点 */
// 1. 可以继承原型上的属性和方法
// 2. 解决了原型链继承引用类型属性的问题

/** 缺点 */
// 1. 父类构造函数执行了两次，而且继承的属性在子类和子类原型中都存在
