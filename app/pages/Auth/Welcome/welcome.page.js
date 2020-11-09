import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './welcome.style';

export default function WelcomePage() {
    return (
        <View style={ styles.container }>
            <Text>Welcome page</Text>
        </View>
    )
}
