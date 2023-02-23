export class Label {
  private _label: HTMLLabelElement;
  constructor(text: string = '') {
    this._label = document.createElement('label');
    this._label.innerText = text;
    this._label.className = 'input-label';
  }

  get Label() {
    return this._label;
  }
}
