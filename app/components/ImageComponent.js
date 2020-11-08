import React, { useEffect, useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import consts from '../shared/consts/CommonConsts'
import colors from '../config/color'

export default function ImageComponent({ uri, width }) {
    const [inStyle, setStyle] = useState();
    width =  width ?? consts.windowWidth;
    
    useEffect(() => {
        Image.getSize(uri, (w, h) => {
            const ratio = width / w;
            setStyle({
                width: width,
                height: h * ratio
            })
        })
    }, [])

    return (
        <Image
                style={[styles.container, inStyle ]}
                source={{ uri: uri }}
                resizeMode='cover'
        />
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: colors.white,
        borderWidth: 1,
    }
})