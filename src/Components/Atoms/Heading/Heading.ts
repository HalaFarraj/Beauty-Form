export class Heading {
  private heading: HTMLHeadingElement;

  constructor(type: string, text: string = '') {
    this.heading = document.createElement(type) as HTMLHeadingElement;
    this.heading.innerText = text;
    this.heading.className = 'heading';
  }

  get Heading() {
    return this.heading;
  }
}
