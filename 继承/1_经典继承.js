/** 经典继承 */

/** 创建 Animal 构造函数 */
function Animal() {
    this.animalName = 'animal';
    this.color = ['red', 'blue'];
}

/** 给 Animal 添加原型方法 */
Animal.prototype.animalFunction = function () {
    console.log(this.animalName);
}
Animal.prototype.common = 'common';

/** 创建 Person 构造函数 */
function Person() {
    // 继承 Animal 属性
    // 在构造函数中调用要继承的构造函数, 还可以进行传递参数
    Animal.call(this);
    this.personName = 'person';
}

Person.prototype.personFunction = function() {
    alert(this.personName);
}

const person1 = new Person();
const person2 = new Person();

person1.color.push('yellow');

// person1.animalFunction();
console.log(person1.color, person2.color);
console.log(person1.common);

/** 缺点 */
// 1. 只能继承构造函数中的属性，无法继承原型上的方法