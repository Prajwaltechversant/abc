

import React from 'react';
import Main from './src/screens/stack/Main';
import { NavigationContainer } from '@react-navigation/native';
import CountryDataContext from './src/context/CountryDataContext';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import LoginContext from './src/context/LoginContext';
import KeyChainContextProvider from './src/context/KeyChainContext';
import ScreenContextProvider from './src/context/ScreenContextProvider';


function App(): React.JSX.Element {

  return (
    <>
      <Provider store={store}>
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
      </Provider>


    </>
  );
}



export default App;
