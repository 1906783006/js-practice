/** 原型是继承：通过一个对象创建另一个对象 */

function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

function createAnother(original) {
    const clone = object(original);
    clone.sayHello = function() {
        console.log('hello');
    }
    return clone;
}

const person = {
    name: 'haha',
    colors: ['red', 'blue']
}

const person1 = createAnother(person);
person1.colors.push('yellow');

console.log(person1.colors, person.colors); // [ 'red', 'blue', 'yellow' ] [ 'red', 'blue', 'yellow' ]

// person1.sayHello();

// 缺点：依然存在属性共存的问题
