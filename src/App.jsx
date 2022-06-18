import React from 'react'
import { Provider } from 'react-redux'
import 'react-notifications/lib/notifications.css';

import Routes from "./components/Routes";
import Web3ModalProvider from "./contexts/Web3ModalProvider";
import Web3WrapperProvider from "./contexts/Web3WrapperProvider";

import { NotificationContainer } from 'react-notifications';

import { store } from './_helpers';

const Web3Provider = ({children}) => (
  <Web3ModalProvider>
    <Web3WrapperProvider>
      {children}
    </Web3WrapperProvider>
  </Web3ModalProvider>
)

function App() {
  return (
    <Web3Provider>
      <Provider store={store}>
        <Routes />
        <NotificationContainer/>
      </Provider>      
    </Web3Provider>
  );
}

export default App;
