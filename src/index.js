const _ = require('lodash');
const $ = require('jquery');
const messages =require('./say-hello');
console.log(messages.mean());
console.log(messages.nice());
console.log(messages.nooch());
console.log(_.chunk(['a', 'b', 'c', 'd'], 3));

const sayHello = () => {
    console.log("hello");
};



$("#changeColor").on('click', (e) => {
    $(this).css("background-color", "pink")
});





sayHello();