import { emailsMap } from '../pages/MainPage.js';

export function register(email, password) {
  //this email exists, then show a msg that it exists
  if (emailsMap.get(email)) {
    alert("An account is already registered with your email");
  }
  else{
    localStorage.setItem(email,password)
    alert("Successfully registered")
  }
}
