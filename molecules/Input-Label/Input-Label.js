import { Input } from '../../atoms/Input/Input.js';
import { Label } from '../../atoms/Label/Label.js';
import { Paragraph } from '../../atoms/Paragraph/Paragraph.js';

//pass an object as a parameter
export class InputLabelDiv {
  constructor(
    // className = 'inputs',
    {
      labelText,
      inputType = 'text',
      placeholder = '',
      value = '',
      // inputClassName = '',
      name = '',
      paragraphName,
      onFocus,
      onChange,
      onBlur,
    }
  ) {
    this.inputLabelDiv = document.createElement('div');
    this.inputLabelDiv.className = 'inputs';
    // this.inputLabelDiv.className += ` ${className}`;

    let label = new Label(labelText);
    let input = new Input(
      {
        type:inputType,
        placeholder : placeholder,
        value:value,
        // paragraphName,
        name:name,
        onFocus: onFocus,
        onChange: onChange,
        onBlur:onBlur
      }
     
    );

   
    
    this.errorMessage = new Paragraph({text:"ret"});
    this.inputLabelDiv.appendChild(label.Label);
    // input.CheckInput();
    this.inputLabelDiv.appendChild(input.Input);
    this.inputLabelDiv.appendChild(this.errorMessage.Paragraph)
  }

  appendErrorMessage(text=''){
    this.errorMessage.Paragraph(text);
  }
  get InputLabelDiv() {
    return this.inputLabelDiv;
  }
}
