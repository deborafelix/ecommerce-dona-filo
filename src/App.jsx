import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.scss';

import Routes from './routes'

import Header from './container/Header';
import { store, persitedStore} from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <PersistGate loading={null} persistor={persitedStore} >
          <Routes />
        </PersistGate>
      </BrowserRouter>
      
    </Provider>
  );
}

export default App;
