const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes.js');
//Shape, Circle, Triangle, Square
//shapeColor, text, textolor

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter three characters.',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Enter text color.',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Pick a shape.',
            choices: ["Circle", "Triangle", "Square"],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'Enter shape color.',
            name: 'shapeColor',
        },
    ])
    .then((data) => {
        if (data.shape === "Circle") {
            const newLogo = new Shapes[1](data.shapeColor, data.text, data.textColor);
            const render = newLogo.render();
            fs.writeFile('logo.svg', render, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
            );
        } else if (data.shape === "Triangle") {
            const newLogo = new Shapes[2](data.shapeColor, data.text, data.textColor);
            const render = newLogo.render();
            fs.writeFile('logo.svg', render, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
            );
        } else if (data.shape === "Square") {
            const newLogo = new Shapes[3](data.shapeColor, data.text, data.textColor);
            const render = newLogo.render();
            fs.writeFile('logo.svg', render, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
            );
        }
    });

    /*
    TODO:
    add a method to limit text to 3 characters
    write tests for each class.
    */