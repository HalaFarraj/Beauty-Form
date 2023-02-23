export class Heading {
    constructor(type, text = '') {
        this.heading = document.createElement(type);
        this.heading.innerText = text;
        this.heading.className = 'heading';
    }
    get Heading() {
        return this.heading;
    }
}
//# sourceMappingURL=Heading.js.map