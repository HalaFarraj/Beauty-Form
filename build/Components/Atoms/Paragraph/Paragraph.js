export class Paragraph {
    constructor(text = '') {
        this._paragraph = document.createElement('p');
        this._paragraph.innerText = text;
    }
    set Paragraph(text) {
        this._paragraph = text;
    }
    get Paragraph() {
        return this._paragraph;
    }
}
//# sourceMappingURL=Paragraph.js.map