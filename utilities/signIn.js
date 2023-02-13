import { emailsMap } from '../pages/MainPage.js';

export function signIn(email, password) {
  let map = emailsMap;
  if (map.get(email) && map.get(email) ==password  ){
    console.log(map.get(email))
    alert('Signed in successfully');
  } else {
    console.log(map.get(email))
    alert('Please check your email or password');
  }
}
