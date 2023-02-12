export class Select {
  constructor(
    name = '',
    id = '',
    //  className = 'select',
    ...options
  ) {

    this.select = document.createElement('select');
    this.select.name = name;
    this.select.id = id;
    this.select.className = 'select';

    for (let item of options) {
      let option = document.createElement('option');
      option.id = String(item).toLowerCase();
      option.text = item;
      option.value = String(item).toLowerCase();
      this.select.appendChild(option);
    }
  }

  get Select() {
    return this.select;
  }
}
