export class AnchorTag {
  constructor(text, href = '', className = 'anchor', parentName) {
    this.anchortag = document.createElement('a');
    this.anchortag.innerText = text;
    this.anchortag.href = href;
  }

  switchContent() {
    this.anchortag.addEventListener('click', () => {
      // alert('Hi');
      console.log(document.getElementsByClassName('login-form'));
      // document.getElementsByClassName('login-form').style.display =
      //   'none';
    });
  }

  get AnchorTag() {
    return this.anchortag;
  }
}
