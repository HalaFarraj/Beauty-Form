import { emailsMap } from '../Pages/MainPage.js';
import { FORM_STRINGS } from '../strings/strings.js';

export function signIn(email: string, password: string): void {
  let map = emailsMap;
  if (map.get(email) && map.get(email) == password) {
    alert(FORM_STRINGS.successfulSignIn);
  } else {
    alert(FORM_STRINGS.unSuccessfulSignIn);
  }
}
