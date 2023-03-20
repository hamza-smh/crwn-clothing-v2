import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import { CartProvider } from './context/cart.context';
import { store } from './store/store';
//import { UserProvider } from './context/user.context';
//import { CategoriesProvider } from './context/categories.context';


const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
            <CartProvider>
            <App />
            </CartProvider>
          {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
