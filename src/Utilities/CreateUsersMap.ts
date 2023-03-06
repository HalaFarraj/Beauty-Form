export function createEmailsMap(): Map<string, string | null> {
  let localStorageKeys: string[] = Object.keys(localStorage);
  let emailsMap: Map<string, string | null> = new Map();

  let email: string;
  for (email of localStorageKeys) {
    let password: string | null = localStorage.getItem(email);
    emailsMap.set(email, password);
  }

  return emailsMap;
}
