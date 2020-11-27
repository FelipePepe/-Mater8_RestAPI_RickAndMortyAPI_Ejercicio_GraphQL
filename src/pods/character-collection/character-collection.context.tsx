import React from 'react';

interface PageContext {
  numberPage: number;
  setNumberPage: (value: number) => void;
}

export const NumberPageContext = React.createContext<PageContext>({
  numberPage: 0,
  setNumberPage: (value) => {},
});

export const NumberPageContextProvider = (props) => {
  const [numberPage, setNumberPage] = React.useState(1);

  return (
    <NumberPageContext.Provider value={{ numberPage, setNumberPage }}>
      {props.children}
    </NumberPageContext.Provider>
  );
};
