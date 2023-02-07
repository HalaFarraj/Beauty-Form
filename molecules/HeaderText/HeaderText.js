import { Heading } from '../../atoms/Heading/Heading.js';

export class HeaderText {
  constructor(mainHeaderText, subHeaderText = '') {
    this.headerText = document.createElement('div');
    this.headerText.className = 'headerText';
    let h1 = new Heading('h1', mainHeaderText);
    let h5 = new Heading('h5', subHeaderText);
    this.headerText.appendChild(h1.Heading);
    this.headerText.appendChild(h5.Heading);
  }

  get HeaderText() {
    return this.headerText;
  }
}
