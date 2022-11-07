import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack.jsx';
import {AppContextProvider} from './src/context/QuizContext.jsx';
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <AppContextProvider>
          <MainStack />
        </AppContextProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
