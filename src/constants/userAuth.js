import { createContext } from "react";
import {  useState } from "react";

export const UserAuthContext = createContext({});

export const UserAuthProvider = (props) => {
    const [user, setUser] = useState({});
    const [performance, setPerformance] = useState(0)


    return (
        <UserAuthContext.Provider value={{user, setUser, performance, setPerformance}}>
            {props.children}
        </UserAuthContext.Provider>
    );
};

