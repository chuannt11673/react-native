import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../pages/Home/Profile/profile.page';
import { BrandColor } from '../../utils/contants/colors.const';

const Stack = createStackNavigator();
export default function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}