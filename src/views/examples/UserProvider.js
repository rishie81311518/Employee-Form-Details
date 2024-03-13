import React, { createContext, useContext, useState} from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    //const [userData, setUserData] = useState(null);
    const [loggedUserData, setLoggedUserData] = useState({});


    // const setUserAndLoggedUserData = (loggedUserData) => {
    //    // setUserData(userData);
    //     setLoggedUserData(loggedUserData);
    // };

    return (
        <UserContext.Provider value={{ loggedUserData, setLoggedUserData }}>
             {children}
        </UserContext.Provider>
       );
}

export const useUser = () => useContext(UserContext);

export default useUser;