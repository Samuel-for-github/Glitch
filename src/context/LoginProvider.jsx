import React, {useState} from 'react';
import LoginContext from "./LoginContext.js";

const LoginProvider = ({children}) => {
    const [allowLogin, setAllowLogin] = useState(false)
    const [allowSignup, setAllowSignup] = useState(false)
    return (
        <LoginContext.Provider value={{allowLogin, setAllowLogin, allowSignup, setAllowSignup}}>
        {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;