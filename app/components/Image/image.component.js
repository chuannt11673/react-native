import React, { useEffect, useState } from 'react';
import { Dimensions, Image } from 'react-native';
import { styles } from './image.style';

const windowWidth = Dimensions.get('window').width;
export default function ImageComponent({ uri, width, containerStyle }) {
    const [inStyle, setStyle] = useState();
    width =  width ?? windowWidth;
    
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
                style={[styles.container, inStyle, containerStyle ]}
                source={{ uri: uri }}
                resizeMode='cover'
        />
    )
}