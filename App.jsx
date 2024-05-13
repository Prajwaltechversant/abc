
import React from 'react';
import Main from './src/screens/stack/Main';
import { NavigationContainer } from '@react-navigation/native';
import CountryDataContext from './src/context/CountryDataContext';
import LoginContext from './src/context/LoginContext';
import KeyChainContextProvider from './src/context/KeyChainContext';
import ScreenContextProvider from './src/context/ScreenContextProvider';
import UserContext from './src/context/userContext';
function App() {


  return (
    <>
      
          <ScreenContextProvider>
            <LoginContext>
              <KeyChainContextProvider>
                <UserContext>
                  <CountryDataContext>
                    <NavigationContainer>
                      <Main />
                    </NavigationContainer>
                  </CountryDataContext>
                </UserContext>
              </KeyChainContextProvider>
            </LoginContext>
          </ScreenContextProvider>
    </>
  );
}



export default App;
