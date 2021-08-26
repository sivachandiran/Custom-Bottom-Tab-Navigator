import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigations/Tabs';

const App = () => {

  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
export default App;