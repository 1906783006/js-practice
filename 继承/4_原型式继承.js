const person = {
    name: 'haha',
    colors: ['red', 'blue']
}

function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

const person1 = object(person);
person1.colors.push('yellow');

console.log(person.colors, person1.colors);
// person1.getName();

// 缺点：存在继承属性引用类型问题
