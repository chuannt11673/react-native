import React from 'react';
import { Button } from 'react-native-elements';
import { styles } from './button.style';

export default function ButtonComponent({ title, icon, onPress, onPressIn, containerStyle, buttonStyle, titleStyle }) {
    const defaultHandler = (e) => {
        console.log('please handle event');
    }
    
    return (
        <Button
            containerStyle={containerStyle}
            buttonStyle={[styles.button, buttonStyle]}
            titleStyle={[styles.title, titleStyle]}
            title={title}
            icon={icon}
            onPress={
                (e) => onPress ? onPress(e) : defaultHandler
            }
            onPressIn={
                (e) => onPressIn ? onPressIn(e) : defaultHandler
            }
        />
    )
}


