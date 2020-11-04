import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import color from '../config/color'

import colors from '../config/color'

export default function MaxLengthTextComponent(props) {
    const maxLenght = 130;
    const [text, setText] = useState(props.text);
    const onPressHandler = () => {
        setText(props.text);
    }
    const renderViewMoreButton = () => {
        if (text === props.text) {
            return null;
        }

        return (
            <TouchableOpacity onPress={onPressHandler}>
                <Text key={styles.viewMoreText} style={styles.viewMoreText}>Xem thêm</Text>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        if (props.text.length > maxLenght) {
            const truncatedText = props.text.slice(0, maxLenght);
            setText(truncatedText + '...');
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.containerText}>
                {text}
                {
                    renderViewMoreButton()
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    containerText: {
        color: colors.black,
        fontSize: 16,
        opacity: color.opacity8,
        lineHeight: 21
    },
    viewMoreText: {
        top: 5,
        color: colors.secondary,
        fontSize: 16,
    }
})
