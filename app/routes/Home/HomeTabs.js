import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';
import Message from '../../pages/Home/Message/message.page';
import Diary from '../../pages/Home/Diary/diary.page';
import Dating from '../../pages/Home/Dating/dating.page';
import Profile from '../../pages/Home/Profile/profile.page';
import { BrandColor } from '../../utils/contants/colors.const';

const Tab = createBottomTabNavigator()

export default function HomeTabs() {

  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let color = focused ? BrandColor.secondary : BrandColor.black;
            switch (route.name) {
                case 'Message':
                    iconName = 'bubbles';
                    break;
                case 'Diary':
                    iconName = 'globe';
                    break;
                case 'Dating':
                    iconName = 'heart';
                    break;
                case 'Profile':
                    iconName = 'user';
            }
            return <SimpleLineIcons name={iconName} size={21} color={color} />
          }
        })
      }
    >
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Diary" component={Diary} />
      <Tab.Screen name="Dating" component={Dating} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}
