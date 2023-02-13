

export class Input {
  constructor({
    type = 'text',
    placeholder = '',
    value = '',
    name = '',
    onChange,
    onFocus,
    onBlur,
    onSubmit,
  }) {
    this.input = document.createElement('input');
    this.input.type = type;
    this.input.placeholder = placeholder;
    this.input.value = value;

    this.input.name = name;
    this.input.setAttribute('required', '');

    if (onChange) {
      console.log('onChange is called:', onChange);
      this.input.addEventListener('change', onChange);
    }

    if (onBlur) {
      this.input.addEventListener('blur', onBlur);
    }
    if (onSubmit) {
      console.log('onSubmit is called:', onSubmit);
      this.input.addEventListener('submit', onSubmit);
    }
  }

  get Input() {
    return this.input;
  }
}
