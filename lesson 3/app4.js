'use strict'

// Перед вами находится массив с продуктами в интернет-магазине. 
// Вам нужно:

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg"
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    }
];

// 1. Получить все товары, у которых есть фотографии, 
// можете использовать метод filter https://mzl.la/2qROQkT
let productsWithPhoto = products.filter(function (product) {
    if (product.photos) {
        return product.photos.length > 0;
    }
});

console.log(productsWithPhoto);

// 2. Отсортируйте товары по цене (от низкой цены к высокой), 
// можете использовать метод sort https://mzl.la/2Y79hbZ , как устроен sort 
// можно посмотреть например здесь https://youtu.be/O2pusOp0gC0
products.sort(function (produict1, produict2) {
    return produict1.price - produict2.price;
});

console.log(products);
