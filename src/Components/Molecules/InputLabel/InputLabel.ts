import { Input } from '../../Atoms/Input/Input.js';
import { Label } from '../../Atoms/Label/Label.js';
import { Paragraph } from '../../Atoms/Paragraph/Paragraph.js';

interface IinputLabelProps {
  labelText: string;
  inputType: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onBlur?: EventListenerOrEventListenerObject;
  onChange?: EventListenerOrEventListenerObject;
  onSubmit?: EventListenerOrEventListenerObject;
}

export class InputLabelWrapper {
  private _inputLabelWrapper: HTMLDivElement;
  private _errorMessage: Paragraph;
  constructor(obj: IinputLabelProps) {
    this._inputLabelWrapper = document.createElement('div');
    this._inputLabelWrapper.className = 'wrapper';

    let label = new Label(obj.labelText);
    let input = new Input({
      type: obj.inputType ?? 'text',
      placeholder: obj.placeholder ?? '',
      value: obj.value ?? '',
      name: obj.name ?? '',
      onBlur: obj.onBlur,
      onChange: obj.onChange,
      onSubmit: obj.onSubmit,
    });
    this._errorMessage = new Paragraph('');
    this._inputLabelWrapper.appendChild(label.Label);
    this._inputLabelWrapper.appendChild(input.Input);
    this._inputLabelWrapper.appendChild(this._errorMessage.Paragraph);
  }

  get InputLabelWrapper() {
    return this._inputLabelWrapper;
  }
}
