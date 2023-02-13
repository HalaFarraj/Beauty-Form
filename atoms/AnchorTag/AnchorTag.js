export class AnchorTag {
  constructor({text, href = '',onClick}) {
    this.anchortag = document.createElement('a');
    this.anchortag.innerText = text;
    // this.anchortag.href = href;
      if(onClick){
        this.anchortag.addEventListener('click', onClick,false)
      }
  }

  // switchContent(event) {
  //   console.log(event)
  //   this.anchortag.addEventListener('click', () => {
  //     // alert('Hi');
  //     console.log(document.getElementsByClassName('login-form'));
  //     // document.getElementsByClassName('login-form').style.display =
  //     //   'none';
  //   });
  // }

  get AnchorTag() {
    return this.anchortag;
  }
}
