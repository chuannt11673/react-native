import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from './HomeNavigator';
import CommentScreen from '../screens/CommentScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeNavigator} options={{headerShown: false}} />
      <Stack.Screen name="Comment" component={CommentScreen} />
    </Stack.Navigator>
  );
}