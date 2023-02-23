import { Heading } from '../../Atoms/Heading/Heading.js';

export class TitlesWrapper {
  private _titlesWrapper: HTMLDivElement;
  constructor(mainHeaderText: string, subHeaderText: string = '') {
    this._titlesWrapper = document.createElement('div');
    this._titlesWrapper.className = 'headerText';
    let h1 = new Heading('h1', mainHeaderText);
    let h5 = new Heading('h5', subHeaderText);
    this._titlesWrapper.appendChild(h1.Heading);
    this._titlesWrapper.appendChild(h5.Heading);
  }

  get TitlesWrapper() {
    return this._titlesWrapper;
  }
}
