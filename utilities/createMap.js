export function createEmailsMap() {
  let localStorageKeys = Object.keys(localStorage);

  let emailsMap = new Map();

  for (let email of localStorageKeys) {
    let password = localStorage.getItem(email);
    emailsMap.set(email, password);
  }

  return emailsMap;
}
