export interface IinputProperties {
  type?: string;
  placeholder: string;
  value: string;
  name: string;
  onChange?: EventListenerOrEventListenerObject;
  onBlur?: EventListenerOrEventListenerObject;
  onSubmit?: EventListenerOrEventListenerObject;
}

export class Input {
  private _input: HTMLInputElement;
  constructor(inputProperties: IinputProperties) {
    this._input = document.createElement('input');
    this._input.type = inputProperties.type ?? 'text';
    this._input.placeholder = inputProperties.placeholder;
    this._input.value = inputProperties.value;
    this._input.name = inputProperties.name;
    this._input.setAttribute('required', '');

    if (inputProperties.onChange) {
      this._input.addEventListener(
        'change',
        inputProperties.onChange
      );
    }

    if (inputProperties.onBlur) {
      this._input.addEventListener('blur', inputProperties.onBlur);
    }

    if (inputProperties.onSubmit) {
      this._input.addEventListener(
        'submit',
        inputProperties.onSubmit
      );
    }
  }

  get Input() {
    return this._input;
  }
}
