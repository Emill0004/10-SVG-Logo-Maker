const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter three characters.',
            name: 'txt',
        },
        {
            type: 'input',
            message: 'Enter text color.',
            name: 'txtColor',
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
        const filename = `${data.txt.toLowerCase()}.json`;
        
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('test')
        );
    });

    /*
    TODO:
    make a class system for objects with a render() method
    take inquirer inputs and make a new object
    */