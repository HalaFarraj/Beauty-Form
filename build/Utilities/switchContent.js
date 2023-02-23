export function switchContent(from, to) {
    document
        .getElementsByClassName('form')[to].classList.remove('hide-content');
    document
        .getElementsByClassName('form')[from].classList.add('hide-content');
}
//# sourceMappingURL=switchContent.js.map