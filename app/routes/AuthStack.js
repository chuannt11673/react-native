import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../pages/Auth/Welcome/welcome.page';
import RegisterPage from '../pages/Auth/Register/register.page';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={RegisterPage} />
    </Stack.Navigator>
  );
}
