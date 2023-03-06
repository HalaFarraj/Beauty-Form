export function switchContent(from: number, to: number): void {
  document
    .getElementsByClassName('form')
    [to].classList.remove('hide-content');
  document
    .getElementsByClassName('form')
    [from].classList.add('hide-content');
}
