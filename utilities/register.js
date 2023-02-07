import { emailsMap } from '../pages/MainPage.js';

export function register(email, password) {
  if (emailsMap.get(email)) {
    console.log(emailsMap.get(email));
  }
}
