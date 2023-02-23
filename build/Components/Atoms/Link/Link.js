export class Link {
    constructor(linkProps) {
        this._link = document.createElement('a');
        this._link.innerText = linkProps.text;
        if (linkProps.onClick) {
            this._link.addEventListener('click', linkProps.onClick, false);
        }
    }
    get Link() {
        return this._link;
    }
}
//# sourceMappingURL=Link.js.map