const _ = require('lodash');
const $ = require('jquery');
const sayHello = () => {
    console.log("hello");
};

$("#changeColor").on('click', (e) => {
    $(this).css("background-color", "pink")
});


sayHello();