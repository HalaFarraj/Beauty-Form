export class Paragraph {
  private _paragraph: HTMLParagraphElement;
  constructor(text: string = '') {
    this._paragraph = document.createElement('p');
    this._paragraph.innerText = text;
  }
  set Paragraph(text) {
    this._paragraph = text;
  }

  get Paragraph() {
    return this._paragraph;
  }
}
