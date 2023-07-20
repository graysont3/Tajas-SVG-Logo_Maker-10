const { Circle, Triangle, Square } = require('./shapes');

describe('shape', () => {
    test('if circle was rendered it should be true', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expext(shape.render()).toEqual(`<circle cx="25" cy="75" r="20" fill="blue"/>`)
    });
});

describe('shape', () => {
    test('if triangle was rendered it should be true', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expext(shape.render()).toEqual(`<polygon points="50,160 55,180 70,180" fill="blue"/>`)
    });
});

describe('shape', () => {
    test('if square was rendered it should be true', () => {
        const shape = new Square();
        shape.setColor("blue");
        expext(shape.render()).toEqual(`<rect x="10" y="10" width="30" height="30" fill="blue"/>`)
    });
});