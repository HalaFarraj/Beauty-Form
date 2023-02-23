import { emailsMap } from '../Pages/MainPage.js';
import { FORM_STRINGS } from '../strings/strings.js';

export function register(email: string, password: string): void {
  if (emailsMap.get(email)) {
    alert(FORM_STRINGS.unSuccessfulRegistration);
  } else {
    localStorage.setItem(email, password);
    alert(FORM_STRINGS.successfulRegistration);
  }
}
