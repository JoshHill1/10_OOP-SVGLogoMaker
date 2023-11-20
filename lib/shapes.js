class Shape {
  constructor(color) { 
    this.color = color;
  };
}

class Circle extends Shape{
  constructor(color) {
  super(color);
  };
  render (){
    return `<circle cx="100" cy="100" r="90" fill="${this.color}" />`;
  }
}

class Square extends Shape{
  constructor(color) {
  super(color);
  };
  render (){
    return `<rect x="10" y="60" width="150" height="180" fill="${this.color}" />`;
  }
}


class Triangle extends Shape{
  constructor(color) {
    super(color);
  };
  render (){
    return `<polygon points="150, 30 250, 200 60, 200" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle};
