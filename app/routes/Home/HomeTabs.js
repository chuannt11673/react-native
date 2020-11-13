import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';
import { BrandColor } from '../../utils/contants/colors.const';
import MessageStack from './MessageStack';
import DiaryStack from './DiaryStack';
import DatingStack from './DatingStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

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
      <Tab.Screen name="Message" component={MessageStack} />
      <Tab.Screen name="Diary" component={DiaryStack} />
      <Tab.Screen name="Dating" component={DatingStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  )
}
