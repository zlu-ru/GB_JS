'use strict'
// 1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// конструктор Product, который принимает параметры name и price, 
// сохраните их как свойства объекта. 
// Также объекты типа Product должны иметь метод make25PercentDiscount, 
// который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
//  make25PercentDiscount не должен быть внутри функции-конструктора, 
//  и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).

//es5
function Product_es5(name, price) {
    this.name = name;
    this.price = price;
}

Product_es5.prototype.makeDiscount = function (discount) {
    this.price = this.price - this.price * (discount / 100);
}

const product1 = new Product_es5('book', 50);
product1.makeDiscount(25);
console.log(product1);

const product2 = new Product_es5('case', 25);
product2.makeDiscount(25);
console.log(product2);


//es6
class Product_es6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    makeDiscount(discount) {
        this.price = this.price - this.price * (discount / 100);
    }
}

const product3 = new Product_es6('lamp', 150);
product3.makeDiscount(25);
console.log(product3);

const product4 = new Product_es6('flat', 1500000);
product4.makeDiscount(25);
console.log(product4);