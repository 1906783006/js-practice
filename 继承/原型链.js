// 1. 原型上的引用类型
function Person() {};

Person.prototype.name = 'haha';
Person.prototype.hobby = ['basketball', 'football'];

const person1 = new Person();
const person2 = new Person();

person1.name = 'shuangwaiwai';
person1.hobby[0] = 'coder';

console.log(person1.name, person2.name);
console.log(person1.hobby, person2.hobby);
