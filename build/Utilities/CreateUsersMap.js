export function createEmailsMap() {
    let localStorageKeys = Object.keys(localStorage);
    let emailsMap = new Map();
    let email;
    for (email of localStorageKeys) {
        let password = localStorage.getItem(email);
        emailsMap.set(email, password);
    }
    return emailsMap;
}
//# sourceMappingURL=CreateUsersMap.js.map