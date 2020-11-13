import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './Home/HomeTabs';
import Comment from '../pages/Comment/comment.page';
import CreatePost from '../pages/CreatePost/create-post.page';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Comment'
        component={Comment}
      />
      <Stack.Screen
        name='CreatePost'
        component={CreatePost}
      />
    </Stack.Navigator>
  );
}
