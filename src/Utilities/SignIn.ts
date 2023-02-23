import { emailsMap } from '../Pages/MainPage.js';
import { FORM_STRINGS } from '../strings/strings.js';

export function signIn(email: string, password: string): void {
  let map = emailsMap;
  console.log(map);
  if (map.get(email) && map.get(email) == password) {
    console.log(map.get(email));
    alert(FORM_STRINGS.successfulSignIn);
  } else {
    console.log(map.get(email));
    alert(FORM_STRINGS.unSuccessfulSignIn);
  }
}
