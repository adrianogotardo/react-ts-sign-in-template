export type ParsedUserType = {
    username: string;
    email: string;
    token: string;
}

export function useStoredUser(): ParsedUserType | null {
    let parsedUser: ParsedUserType | null;

    const locallyStoredUser: string | null = window.localStorage.getItem('userCredentials');

    if(locallyStoredUser) {
        parsedUser = JSON.parse(locallyStoredUser);
    } else {
        parsedUser = null;
    }

    return parsedUser;
}