import React, { createContext, useContext } from 'react';
import useGetAllData from './api/requests/getAllData';
import { defaultContextValue } from './types';

const Context = createContext(defaultContextValue);
export const useMainContext = () => {
  return useContext(Context);
};

const MainContext: React.FC = ({ children }) => {
  const allData = useGetAllData();

  return <Context.Provider value={allData}>{children}</Context.Provider>;
};

export default MainContext;
