import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyles } from './helpers/styles/Global.styled';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/phonebook">
          <App />
          <GlobalStyles />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
