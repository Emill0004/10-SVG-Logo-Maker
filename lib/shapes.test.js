// This line imports the shape classes from shapes.js
const Shape = require('./shapes.js');


describe('Shapes', () => {
    // this test checks if circle.render returns the correct string based on the given parameters.
    describe('Circle Code', () => {
        it('should pass if .render() returns code for an svg circle', () => {
            const circle = new Shape[1]('black', 'TXT', 'white');
            const result = circle.render();
            expect(result).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="black" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TXT</text></svg>`);
        });
    });
    // this test checks if triangle.render returns the correct string based on the given parameters.
    describe('Triangle code', () => {
        it('should pass if .render() returns code for an svg triangle', () => {
            const triangle = new Shape[2]('black', 'TXT', 'white');
            const result = triangle.render();
            expect(result).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 15, 30 185, 270 185" fill="black" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">TXT</text></svg>`)
        });
    });
    // this test checks if square.render returns the correct string based on the given parameters.
    describe('Square code', () => {
        it('should pass if .render() returns code for an svg square', () => {
            const square = new Shape[3]('black', 'TXT', 'white');
            const result = square.render();
            expect(result).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="70 25, 230 25, 230 185, 70 185" fill="black" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TXT</text></svg>`)
        });
    });
});