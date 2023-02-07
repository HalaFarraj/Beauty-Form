import { Input } from '../../atoms/Input/Input.js';
import { Label } from '../../atoms/Label/Label.js';

//pass an object as a parameter
export class InputLabelDiv {
  constructor(
    className = 'inputs',
    labelText,
    inputType = 'text',
    placeholder = '',
    value = '',
    inputClassName = '',
    name = '',
    onFocus,
    onChange,
    onBlur
  ) {
    this.inputLabelDiv = document.createElement('div');
    this.inputLabelDiv.className = className;
    // this.inputLabelDiv.className += ` ${className}`;

    let label = new Label(labelText);
    let input = new Input(
      inputType,
      placeholder,
      value,
      inputClassName,
      name,
      onFocus,
      onChange,
      onBlur
    );

    this.inputLabelDiv.appendChild(label.Label);
    input.CheckInput();
    this.inputLabelDiv.appendChild(input.Input);
  }

  get InputLabelDiv() {
    return this.inputLabelDiv;
  }
}
