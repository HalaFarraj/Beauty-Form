export class Label {
  constructor(text = '', className = 'input-label') {
    this.label = document.createElement('label');
    this.label.innerText = text;
    this.label.className = this.className;
  }

  get Label() {
    return this.label;
  }
}
