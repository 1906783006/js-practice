// 1.定义Animal的构造函数
function Animal() {
    this.colors = ["red", "green"]
}

// 2.给Animal添加方法
Animal.prototype.animalFunction = function () {
    console.log(this.colors);
}

// 3.定义Person的构造函数
function Person() {
    this.personProperty = "Person"
}

// 4.给Person赋值新的原型对象
Person.prototype = new Animal()

// 5.给Person添加方法
Person.prototype.personFunction = function () {
    alert(this.personProperty)
}

// 6.创建Person对象, 并且调用方法
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