export class BackgroundImg {
    constructor(imgSource) {
        this._headerBg = document.createElement('div');
        this._headerBg.className = 'headerBg';
        this._image = document.createElement('img');
        this._image.src = imgSource;
        this._headerBg.appendChild(this._image);
    }
    get BackgroungImg() {
        return this._headerBg;
    }
}
//# sourceMappingURL=BackgroundImg.js.map