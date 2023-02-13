export class AnchorTag {
  constructor({ text, href = '', onClick }) {
    this.anchortag = document.createElement('a');
    this.anchortag.innerText = text;
    if (onClick) {
      this.anchortag.addEventListener('click', onClick, false);
    }
  }

  get AnchorTag() {
    return this.anchortag;
  }
}
