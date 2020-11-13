import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Diary from '../../pages/Home/Diary/diary.page';
import { BrandColor } from '../../utils/contants/colors.const';
import ButtonComponent from '../../components/Button/button.component';
import { Entypo, Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
export default function DiaryStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Diary'
                component={Diary}
                options={{
                    title: 'Bảng tin',
                    headerStyle: {
                        backgroundColor: BrandColor.primary,
                    },
                    headerTitleStyle: {
                        color: BrandColor.white,
                        fontSize: 18
                    },
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