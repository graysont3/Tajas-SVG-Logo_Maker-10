class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    setColor(color) {
        this.shapeColor = color;
    }
}

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
    render() {
      return `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>`
    }
  }
  
  class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
    render() {
      return `<polygon points="50,160 55,180 70,180" fill="${this.shapeColor}"/>`
    }
  }

  class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
    render() {
      return `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>`
    }
  }

  module.exports = {Shapes, Circle, Triangle, Square}
  