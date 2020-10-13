import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
// Components
import Nav from './components/Nav';

// Routes
import Routes from './routes/routes';

// Style
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Nav />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={4000} className="toast-container" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
