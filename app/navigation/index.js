import React from 'react';
import AuthStackScreen from './Auth';
import {NavigationContainer} from '@react-navigation/native';

function MyNavigation() {
  return (
    <NavigationContainer>
      <AuthStackScreen />
    </NavigationContainer>
  );
}
export default MyNavigation;
