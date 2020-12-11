'use strict'
// Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - * (этот пункт посложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
function isPositive(num) {
    let result;
    if (num >= 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

function isNegative(num) {
    let result;
    if (num < 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

let var1 = prompt("Введите первое число: ");
let var2 = prompt("Введите второе число: ");
if (var1 == null || var2 == null || var1.length == 0 || var2.length == 0) {
    alert("Вы ничего не ввели");
} else if (isNaN(var1) || isNaN(var2)) {
    alert(`Одно или оба введенных вами значений не являются числами`);
} else if (isPositive(var1) && isPositive(var2)) {
    alert("Разность введнных вами чисел: " + (Number(var1) - Number(var2)));
} else if (isNegative(var1) && isNegative(var2)) {
    alert("Произведение введнных вами чисел: " + Number(var1) * Number(var2));
} else if (isNegative(var1) && isPositive(var2) || isPositive(var1) && isNegative(var2)) {
    alert("Сумма введнных вами чисел: " + (Number(var1) + Number(var2)));
}
