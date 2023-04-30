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
        const filename = `${data.text.toLowerCase()}.svg`;

        // if (data.shape === "Circle") {
        //     const newLogo = new Shapes[1](data.shapeColor, data.text, data.textColor);
        //     console.log(newLogo);
        // }else if (data.shape === "Triangle") {
        //     const newLogo = new Shapes[2](data.shapeColor, data.text, data.textColor);
        //     console.log(newLogo);
        // }else if (data.shape === "Square") {
        //     const newLogo = new Shapes[3](data.shapeColor, data.text, data.textColor);
        //     console.log(newLogo);
        // }
        

        if (data.shape === "Circle") {
            const newLogo = new Shapes[1](data.shapeColor, data.text, data.textColor);
            const render = newLogo.render();
            fs.writeFile(filename, render, (err) =>
            err ? console.log(err) : console.log('Success!')
            );
        } else if (data.shape === "Triangle") {
            const newLogo = new Shapes[2](data.shapeColor, data.text, data.textColor);
            const render = newLogo.render();
            fs.writeFile(filename, JSON.stringify(render, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
            );
        } else if (data.shape === "Square") {
            const newLogo = new Shapes[3](data.shapeColor, data.text, data.textColor);
            const render = newLogo.render();
            fs.writeFile(filename, JSON.stringify(render, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
            );
        }
    });

    /*
    TODO:
    make a class system for objects with a render() method
    take inquirer inputs and make a new object
    */