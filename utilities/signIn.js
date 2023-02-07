import { emailsMap } from '../pages/MainPage.js';

export function signIn(email, password) {
  let map = emailsMap;
  if (map.get('email')) {
    alert('Signed in successfully');
  } else {
    alert('Please check your email or password');
  }
}
