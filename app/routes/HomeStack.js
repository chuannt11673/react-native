import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './Home/HomeTabs';
import Comment from '../pages/Comment/comment.page';
import CreatePost from '../pages/CreatePost/create-post.page';
import Chat from '../pages/Chat/chat.page';

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
        options={{
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name='CreatePost'
        component={CreatePost}
        options={{
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name='Chat'
        component={Chat}
        options={{
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
}
