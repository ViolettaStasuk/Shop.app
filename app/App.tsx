/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'mobx-react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppScreenNavigation from './navigators/MainNavigator.tsx';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <Provider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <SafeAreaProvider>
        <NavigationContainer>
          <AppScreenNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
