export class Heading {
  constructor(type, text = '', className = 'heading') {
    this.heading = document.createElement(type);
    this.heading.innerText = text;
    this.heading.className = className;
  }

  get Heading() {
    return this.heading;
  }
}
