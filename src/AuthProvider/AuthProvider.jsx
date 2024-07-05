import { createContext } from "react";

// create context 
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const travelInfo = {
        // Your travel information here
    };

    return (
        <AuthContext.Provider value={travelInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
