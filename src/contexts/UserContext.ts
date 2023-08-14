import { createContext } from "react";

export type UserContextType = {
    userCredentials?: {
        username: string,
        email: string,
        token: string,
    } | null;
    setUserCredentials: React.Dispatch<React.SetStateAction<UserContextType["userCredentials"]>>
}

export const UserContext = createContext<UserContextType | null>(null);