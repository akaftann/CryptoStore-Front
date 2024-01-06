import React, { createContext } from 'react';
import Router from './Router.jsx';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Store from './store/store.js'

const store = new Store()
export const Context = createContext({store,})

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Context.Provider value={{store}}>
      <Router />
    </Context.Provider>
  
);
