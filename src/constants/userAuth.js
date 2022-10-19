import { createContext } from "react";
import {  useState } from "react";

export const UserAuthContext = createContext({});

export const UserAuthProvider = (props) => {
    const [user, setUser] = useState({});

    return (
        <UserAuthContext.Provider value={{user, setUser}}>
            {props.children}
        </UserAuthContext.Provider>
    );
};