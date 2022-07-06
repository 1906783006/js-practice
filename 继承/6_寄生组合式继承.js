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
Person.prototype.personFunction = function() {
    alert(this.personName);
}

function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

function inhreitPrototype(subType, superType) {
    // 2. 将父类原型创建一份
    const prototype = object(superType.prototype);
    // 3. 原型的 constructor 指向子构造函数
    prototype.constructor = subType;
    // 4. 将复制的原型作为子构造函数的原型
    subType.prototype = prototype;
}

inhreitPrototype(Person, Animal);

const person1 = new Person('张三', 16);
const person2 = new Person('wanggang', 18);

person1.color.push('yellow');

person1.animalFunction();

console.log(person1.color, person2.color);

// 优点：既可以继承父构造函数的属性和方法，又避免了属性共存的问题，而且父构造函数只执行了一次，没有庸余的属性