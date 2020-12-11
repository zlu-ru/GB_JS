'use strict'

// 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
//  Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
// Обязательно использовать оператор return.

function Sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function Sub(num1, num2) {
    let result = num1 - num2;
    return result;
}

function Mul(num1, num2) {
    let result = num1 * num2;
    return result;
}

function Div(num1, num2) {
    let result;
    if (num2 != 0) {
        result = num1 / num2;
        return result;
    } else {
        throw new Exception("На ноль делить нельзя");
    }
}
