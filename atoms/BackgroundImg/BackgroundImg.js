export class BackgroundImg {
  constructor(imgSource) {
    this.headerBg = document.createElement('div');
    this.headerBg.className = 'headerBg';

    this.image = document.createElement('img');
    this.image.src = imgSource;

    this.headerBg.appendChild(this.image);
  }

  get BackgroundImg() {
    return this.headerBg;
  }
}
