import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
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
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Stack.Screen name='Comment' component={Comment} />
      <Stack.Screen name='CreatePost' component={CreatePost} />
    </Stack.Navigator>
  );
}

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Message':
      return 'Message';
    case 'Diary':
      return 'Diary';
    case 'Dating':
      return 'Dating';
    case 'Profile':
      return 'Profile';
  }
}