'use strict'
// 6. Нарисовать горку с помощью console.log (используя цикл for), 
// как показано на рисунке,только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx


for (let i = 0, res = 'x'; i < 20; i++) {
    console.log(res);
    res = res + 'x';
}