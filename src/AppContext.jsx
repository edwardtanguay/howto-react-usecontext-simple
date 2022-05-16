import { createContext } from 'react';

export const AppContext = createContext();
 
export const AppProvider = ({ children }) => {
	const companyName = "The Widget Company";
 
    return (
        <AppContext.Provider value={{
            companyName
        }}>
            {children}
        </AppContext.Provider>
    );
 
};