import React from 'react';
import { StatusBar } from 'react-native';

import colors from './app/config/color'
import ProfileScreen from './app/screens/ProfileScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={colors.primary}/>
      <ProfileScreen />
    </>
  );
}


