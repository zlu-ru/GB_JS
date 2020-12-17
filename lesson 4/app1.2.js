'use strict'
// 1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// а) конструктор Post, который принимает параметры author, text, date 
// и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit,
//  который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. 
// Проинициализируйте эти свойства с помощью конструктора Post, чтобы 
// не дублировать код. Также в конструкторе AttachedPost должно создаваться 
// свойство highlighted со значением false. Унаследуйте в объектах типа 
// AttachedPost методы из Post. Объекты типа AttachedPost должны иметь метод 
// makeTextHighlighted, который будет назначать свойству highlighted значение true.

//es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Post.prototype;
AttachedPost.prototype.constructor = Post;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const post1 = new Post('somebody1', 'sometext1', '17.20.2020');
console.log(post1);
post1.edit('someeditedtext1');
console.log(post1);

const attachedPost1 = new AttachedPost('somebody2', 'sometext2', '17.20.2020');
console.log(attachedPost1);
attachedPost1.edit('someeditedtext2');
attachedPost1.makeTextHighlighted();
console.log(attachedPost1);

//es6
// 1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// а) конструктор Post, который принимает параметры author, text, date 
// и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit,
//  который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. 
// Проинициализируйте эти свойства с помощью конструктора Post, чтобы 
// не дублировать код. Также в конструкторе AttachedPost должно создаваться 
// свойство highlighted со значением false. Унаследуйте в объектах типа 
// AttachedPost методы из Post. Объекты типа AttachedPost должны иметь метод 
// makeTextHighlighted, который будет назначать свойству highlighted значение true.

class Post_es6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost_es6 extends Post_es6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const post2 = new Post_es6('somebody2_es6', 'sometext2_es6', '17.20.2020');
console.log(post2);
post2.edit('someeditedtext3');
console.log(post2);

const attachedPost2 = new AttachedPost_es6('somebody2_es6', 'sometext2_es6', '17.20.2020');
console.log(attachedPost2);
attachedPost2.edit('someeditedtext2_es6');
attachedPost2.makeTextHighlighted();
console.log(attachedPost2);