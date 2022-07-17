import { createContext, useState } from 'react';
export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [serachValue, setSearchValue] = useState('');
  const [array, setArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fillArray = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${serachValue}`
      );
      const data = await response.json();
      setArray(data.hits);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return (
    <DataContext.Provider
      value={{
        array,
        setSearchValue,
        serachValue,
        fillArray,
        error,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
