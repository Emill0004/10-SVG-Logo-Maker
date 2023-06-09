const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes.js');

// Inquirer code to promt the user for values.
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
    //this .then function uses an if statement to generate one of the three shapes based on user input and then makes logo.svg with the render() method.
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