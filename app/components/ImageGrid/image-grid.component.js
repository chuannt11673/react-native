import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { styles } from './image-grid.style';

const windowWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height * 0.5;
const percentage = 0.6;
const modes = {
    horizontal: 1,
    vertical: 2
};
export default function ImageGridComponent({ images }) {
    let mode = modes.horizontal;
    const [itemStyles, setItemStyles] = useState(images.map(_ => {
        return {}
    }));
    const renderItem = (item, index) => {
        return <Image style={[styles.item, itemStyles[index]]} key={index} source={{ uri: item }} />
    };

    useEffect(() => {
        if (images.length === 0)
            return;
            
        Image.getSize(images[0], (w,h) => {
            if (w <= h) {
                mode = modes.vertical;
            }

            if (images.length === 1) {
                setItemStyles([{ width: windowWidth, height: h * windowWidth / w }])
            } else {
                const imageStyles = images.map((img, index) => {
                    return mode === modes.horizontal ? getHorizontalStyle(index) : getVerticalStyle(index);
                });
                setItemStyles(imageStyles);
            }
        }, err => {
            throw err;
        })
    }, []);

    const getHorizontalStyle = (index) => {
        if (index === 0) {
            return {
                width: windowWidth,
                height: maxHeight * percentage
            }
        }

        const maximumImages = Math.min(2, images.length - 1);
        return {
            width: windowWidth / maximumImages,
            height: maxHeight * (1 - percentage),
            position: 'absolute',
            bottom: 0,
            left: windowWidth / maximumImages * (index - 1)
        }
    };

    const getVerticalStyle = (index) => {
        if (index === 0) {
            return {
                width: windowWidth * percentage,
                height: maxHeight
            }
        }

        const maximumImages = Math.min(2, images.length - 1);
        return {
            width: windowWidth * (1 - percentage),
            height: maxHeight / maximumImages,
            position: 'absolute',
            top: maxHeight / maximumImages * (index - 1),
            right: 0
        }
    }
    return (
        <View style={styles.grid}>
            {
                images.map((item, index) => renderItem(item, index))
            }
        </View>
    )
}
