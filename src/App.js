import React, { useReducer } from 'react';
import { initialState, reducers } from './store';
import Header from './components/Header';
import ProductList from './components/ProductList';
export const StoreContext = React.createContext();


function App() {
  const [ store, dispatch ] = useReducer(reducers, initialState);
  return (
    <div>
      <StoreContext.Provider value={{store, dispatch}} >
        <Header />
        <ProductList />
      </StoreContext.Provider>
    </div>
  )
}

export default App;
