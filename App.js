import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './app/routes/HomeStack';
import SignInStack from './app/routes/SignInStack';

import colors from './app/config/color';

export default function App() {
  const [isSignedIn, setIsSignIn] = useState(false);
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={colors.primary} />
      <NavigationContainer>
        {
          isSignedIn ? (
            <HomeStack />
          ) : (
            <SignInStack />
          )
        }
      </NavigationContainer>
    </>
  );
}


