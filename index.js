const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require("./lib/shapes.js");


const questions = [
    {
        type: "input",
        message: "Please enter up to 3 characters for your logo",
        name: "text",
    },
    {
        type: "input",
        essage: "Please enter a color keyword OR a hexadecimal number for the text",
        name: "textColor",
    },
    {
        type: "list",
        message: "Please select a shape for your logo:",
        choices: ['circle', 'triangle', 'square'],
        name: "shape",
    },
    {
        type: "input",
        message: "Please enter a color keyword OR hexadecimal number for the shape",
        name: "shapeColor",
    },

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("created file")
    })
};

