import { Input } from '../../atoms/Input/Input.js';
import { Label } from '../../atoms/Label/Label.js';
import { Paragraph } from '../../atoms/Paragraph/Paragraph.js';

export class InputLabelDiv {
  constructor({
    labelText,
    inputType = 'text',
    placeholder = '',
    value = '',
    name = '',
    onFocus,
    onChange,
    onBlur,
    onSubmit,
  }) {
    this.inputLabelDiv = document.createElement('div');
    this.inputLabelDiv.className = 'inputs';

    let label = new Label(labelText);
    let input = new Input({
      type: inputType,
      placeholder: placeholder,
      value: value,
      name: name,
      onFocus: onFocus,
      onChange: onChange,
      onBlur: onBlur,
      onSubmit: onSubmit,
    });

    this.errorMessage = new Paragraph({ text: 'ret' });
    this.inputLabelDiv.appendChild(label.Label);
    this.inputLabelDiv.appendChild(input.Input);
    this.inputLabelDiv.appendChild(this.errorMessage.Paragraph);
  }

  appendErrorMessage(text = '') {
    this.errorMessage.Paragraph(text);
  }
  get InputLabelDiv() {
    return this.inputLabelDiv;
  }
}
