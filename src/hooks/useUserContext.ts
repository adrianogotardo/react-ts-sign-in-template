import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export function useUserContext() {
    const userContext = useContext(UserContext);

    if(!userContext) {
        throw new Error(
            "useUserContext has to be used within <UserContext.provider>"
        );
    }

    return userContext;
}