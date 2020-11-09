import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './Home/HomeTabs';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeTabs} />
    </Stack.Navigator>
  );
}