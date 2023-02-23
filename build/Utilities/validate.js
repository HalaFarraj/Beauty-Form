export function validateEmail(inputValue) {
    let validEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return validEmailRegex.test(inputValue);
}
export function validatePassword(inputValue) {
    let validPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return validPasswordRegex.test(inputValue);
}
//# sourceMappingURL=validate.js.map