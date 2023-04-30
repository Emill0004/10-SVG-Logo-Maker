class Shape {
    constructor(shapeColor, text, textColor) {
        this.color = shapeColor;
        this.text = text;
        this.textColor = textColor
    }
}

class Circle extends Shape{
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render() {
        return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <square cx="150" cy="100" r="80" fill="${this.color}" />
            
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            
</svg>`);

    }
}

class Triangle extends Shape{
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render() {
        return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <square cx="150" cy="100" r="80" fill="${this.color}" />
            
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            
</svg>`);

    }
}

class Square extends Shape{
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render() {
        return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <square cx="150" cy="100" r="80" fill="${this.color}" />
            
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            
</svg>`);

    }
}

module.exports = [Shape, Circle, Triangle, Square];