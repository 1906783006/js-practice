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

console.log(person1.colors, person.colors);

person1.sayHello();
