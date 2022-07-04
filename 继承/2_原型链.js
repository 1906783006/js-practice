// Animal 构造函数
function Animal() {
    this.colors = ["red", "green"]
}
Animal.prototype.animalFunction = function () {
    console.log(this.colors);
}

// Person的构造函数
function Person() {
    this.personProperty = "Person"
}

// 1.给Person赋值新的原型对象
Person.prototype = new Animal()

// 2.给Person添加方法
Person.prototype.personFunction = function () {
    alert(this.personProperty)
}

var person1 = new Person()
var person2 = new Person()

alert(person1.colors) // red,green
alert(person2.colors) // red,green

person1.colors.push("blue")

alert(person1.colors) // red,green,blue
alert(person2.colors) // red,green,blue

/** 优点 */
// 1. 可以继承原型上的属性和方法

/** 缺点 */
// 1. 如果原型上具有引用类型的变量，则当某个实例改变这个变量时，所有的实例也会跟着改变