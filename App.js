import React from 'react';
import { StatusBar } from 'react-native';

import colors from './app/config/color'
import ProfileScreen from './app/screens/ProfileScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={colors.primary}/>
      <ProfileScreen
        avatar='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
      />
    </>
  );
}


