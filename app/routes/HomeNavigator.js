import * as React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SimpleLineIcons } from '@expo/vector-icons'

import MessageScreen from '../screens/MessageScreen'
import DiaryScreen from '../screens/DiaryScreen'
import ProfileScreen from '../screens/ProfileScreen'

import colors from '../config/color'
import DatingScreen from '../screens/DatingScreen'

const Tab = createBottomTabNavigator()

export default function HomeNavigator() {

  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const color = focused ? colors.secondary : colors.black10

            if (route.name === 'Message') {
              return <SimpleLineIcons name="bubbles" size={21} color={color} />
            }

            if (route.name === 'Diary') {
              return <SimpleLineIcons name="globe" size={21} color={color} />
            }

            if (route.name === 'Dating') {
              return <SimpleLineIcons name="heart" size={21} color={color} />
            }

            return <SimpleLineIcons name="user" size={21} color={color} />
          }
        })
      }
    >
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Diary" component={DiaryScreen} />
      <Tab.Screen name="Dating" component={DatingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: colors.secondary
  }
})
