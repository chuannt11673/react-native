import React from 'react';
import { Button } from 'react-native-elements';
import { styles } from './button.style';

export default function ButtonComponent({ title, icon, onPress }) {
    if (!onPress) {
        onPress = (event) => {
            console.log('please handle press');
        }
    }
    
    return (
        <Button
            containerStyle={styles.container}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            title={title}
            icon={icon}
            onPress={
                () => onPress(true)
            }
        />
    )
}


