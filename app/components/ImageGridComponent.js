import React, { useState } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'

import colors from '../config/color'

export default function ImageGridComponent(props) {
    const [styles, setStyles] = useState(props.images.map(item => {
        return {};
    }));
    const setStyle = (image, index) => {
        if (styles.length === 0)
            return;

        const style = styles[index];
        Image.getSize(image.uri, (width, height) => {
            const percentage = maxWidth / width;
            style.width = maxWidth;
            style.height = height * percentage;
        });
    }
    const getStyle = (index) => {
        if (styles.length === 0)
            return;
        return styles[index];
    }
    props.images.map((image, index) => setStyle(image, index));
    return (
        <View style={styles.container}>
            {
                props.images.map((item, index) => (
                    <Image key={index} style={getStyle(index)} source={{ uri: item.uri }} />
                ))
            }
        </View>
    )
}

const maxWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    }
})
