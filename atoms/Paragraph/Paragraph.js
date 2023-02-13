export class Paragraph {
  constructor({ text = '', name }) {
    this.paragraph = document.createElement('p');
    this.paragraph.innerText = text;
  }
  showMessage(show) {
    if (show) {
      this.paragraph.classList.add('show-error');
    }
  }

  clearErrorMessage() {
    this.paragraph.classList.remove('hide-error');
  }

  set Paragraph(text) {
    this.paragraph = text;
  }

  get Paragraph() {
    return this.paragraph;
  }
}
