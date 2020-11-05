import React from 'react';
import { StatusBar } from 'react-native';
import Welcome from './app/screens/WelcomeScreen';

import colors from './app/config/color';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={colors.primary}/>
      <Welcome />
    </>
  );
}


