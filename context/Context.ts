import { createContext, useContext } from 'react';

const AppContext = createContext(null);

export function useAppContext() {
    return useContext(AppContext);
}

export default AppContext;
