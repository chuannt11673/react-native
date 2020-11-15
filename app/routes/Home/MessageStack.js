import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Message from '../../pages/Home/Message/message.page';
import { BrandColor } from '../../utils/contants/colors.const';
import ButtonComponent from '../../components/Button/button.component';
import { Entypo, Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
export default function MessageStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Message'
                component={Message}
                options={{
                    title: 'Tin nhắn',
                    headerStyle: {
                        backgroundColor: BrandColor.primary,
                    },
                    headerTitleStyle: {
                        color: BrandColor.white,
                        fontSize: 18
                    },
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <ButtonComponent
                            buttonStyle={{ backgroundColor: BrandColor.primary }}
                            icon={
                                <Entypo name="menu" size={24} color={BrandColor.white} />
                            }
                        />
                    ),
                    headerRight: () => (
                        <ButtonComponent
                            buttonStyle={{ backgroundColor: BrandColor.primary }}
                            icon={
                                <Ionicons name="md-notifications" size={24} color={BrandColor.white} />
                            }
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}
