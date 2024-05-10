

import React from 'react';
import Main from './src/screens/stack/Main';
import { NavigationContainer } from '@react-navigation/native';
import CountryDataContext from './src/context/CountryDataContext';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import LoginContext from './src/context/LoginContext';
import KeyChainContextProvider from './src/context/KeyChainContext';
import ScreenContextProvider from './src/context/ScreenContextProvider';
import { PersistGate } from 'redux-persist/integration/react';
// import persistStore from 'redux-persist/es/persistStore';
// persistStore

function App() {
  // let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor} > */}
          <ScreenContextProvider>
            <LoginContext>
              <KeyChainContextProvider>
                <CountryDataContext>
                  <NavigationContainer>
                    <Main />
                  </NavigationContainer>
                </CountryDataContext>
              </KeyChainContextProvider>
            </LoginContext>
          </ScreenContextProvider>
        {/* </PersistGate> */}
      </Provider>


    </>
  );
}



export default App;
