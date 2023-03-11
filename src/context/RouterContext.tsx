import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, Location } from 'react-router';

interface RouterContextProps {
  prevLocation: Location | null
}

interface RouterProviderProps {
  children: JSX.Element
}

const RouterContext = createContext({} as RouterContextProps);

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState<Location | null>(null);

  useEffect(() => {
    setPrevLocation(location);
  }, [location]);

  return (
    <RouterContext.Provider value={{ prevLocation }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);