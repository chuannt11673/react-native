import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './truncated-text.style';

export default function TruncatedTextComponent({ text }) {
    const maxLength = 150;
    const [truncatedText, setText] = useState(text);

    useEffect(() => {
        if (text.length > maxLength) {
            const tempText = text.slice(0, maxLength);
            setText(tempText + '...');
        }
    }, []);

    const pressHandler = () => {
        setText(text);
    }

    const renderViewMoreButton = () => {
        if (truncatedText === text) {
            return null;
        }

        return (
            <TouchableOpacity onPress={pressHandler}>
                <Text style={styles.viewMore}>Xem thêm</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {truncatedText}
                {
                    renderViewMoreButton()
                }
            </Text>
        </View>
    )
}
