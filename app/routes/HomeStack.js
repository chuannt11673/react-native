import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './Home/HomeTabs';
import Comment from '../pages/Comment/comment.page';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeTabs} />
      <Stack.Screen name='Comment' component={Comment} />
    </Stack.Navigator>
  );
}