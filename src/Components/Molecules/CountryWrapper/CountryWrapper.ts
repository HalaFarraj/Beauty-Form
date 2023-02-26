import { Label } from '../../Atoms/Label/Label.js';
import { Select } from '../../Atoms/Select/Select.js';

interface ICountryWrapperProps {
  labelText: string;
  selectName: string;
  selectID: string;
  options: string[];
}

export class CountryWrapper {
  private _wrapper: HTMLDivElement;
  constructor(props: ICountryWrapperProps) {
    this._wrapper = document.createElement('div');
    this._wrapper.className = 'wrapper';

    let label: HTMLLabelElement = new Label(props.labelText).Label;
    this._wrapper.appendChild(label);

    let select: HTMLSelectElement = new Select(
      props.selectName,
      props.selectID,
      props.options
    ).Select;
    this._wrapper.appendChild(select);
  }

  get CountryWrapper() {
    return this._wrapper;
  }
}
