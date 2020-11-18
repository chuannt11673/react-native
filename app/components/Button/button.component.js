import React from 'react';
import { Button } from 'react-native-elements';
import { styles } from './button.style';

export default function ButtonComponent({ title, icon, onPress, containerStyle, buttonStyle, titleStyle }) {
    const defaultHandler = (e) => {
        if (onPress) {
            onPress(e);
        }
    }
    
    return (
        <Button
            containerStyle={containerStyle}
            buttonStyle={[styles.button, buttonStyle]}
            titleStyle={[styles.title, titleStyle]}
            title={title}
            icon={icon}
            onPress={
                defaultHandler
            }
        />
    )
}


