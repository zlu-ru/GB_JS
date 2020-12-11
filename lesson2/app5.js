'use strict'
// 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.

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
        console.log("На ноль делить нельзя");
    }
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return Sum(arg1, arg2);
        case "-":
            return Sub(arg1, arg2);
        case "*":
            return Mul(arg1, arg2);
        case "/":
            return Div(arg1, arg2);
    }
}

mathOperation(-1, 8, "+")
mathOperation(-1, 8, "-")
mathOperation(-1, 8, "*")
mathOperation(-1, 8, "/")
