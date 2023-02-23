export function validateEmail(inputValue: string): boolean {
  let validEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return validEmailRegex.test(inputValue);
}

export function validatePassword(inputValue: string): boolean {
  let validPasswordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return validPasswordRegex.test(inputValue);
}
