import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

import colors from '../config/color'
import commonConsts from '../shared/consts/CommonConsts'

export default function ImagesGridComponent(props) {
    const [imageStyles, setImageStyles] = useState(props.images.map(_ => {
        return {};
    }));
    const [coverImageStyle, setCoverImageStyle] = useState({
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.7
    });
    const render = (item, index) => {
        return (
            <Image key={index} style={[styles.item, imageStyles[index]]} source={{ uri: item }}/>
        )
    }
    const renderCoverImage = () => {
        if (props.images.length > 4) {
            return (
                <View style={coverImageStyle}>
                    <Text style={{ color: colors.black, fontSize: 19, fontWeight: 'bold', opacity: 0.5 }}>+{props.images.length - 4}</Text>
                </View>
            )
        }
        return null;
    }
    const getStyle = (index, selectMode) => {
        if (selectMode === mode.horizontal) {
            return getHorizontalStyle(props.images.length - 1, index);
        }

        return getVerticalStyle(props.images.length - 1, index);
    }
    const onInit = () => {
        Image.getSize(props.images[0], (width, height) => {
            const selectMode = width < height ? mode.horizontal : mode.vertical;
            const customStyles = props.images.map((item, index) => {
                return getStyle(index, selectMode);
            });
            setImageStyles(customStyles);
            const coverStyle = {
                ...coverImageStyle,
                width: customStyles[1].width,
                height: customStyles[1].height,
                backgroundColor: colors.grey
            };
            setCoverImageStyle(coverStyle);
        });
    }

    useEffect(() => {
        onInit();
    }, [])
    
    return (
        <View style={styles.gridHorizontal}>
            {
                props.images.map((item, index) => render(item, index))
            }
            {
                renderCoverImage()
            }
        </View>
    )
}

const mode = { horizontal: 1, vertical: 2 }
const gridHeight = commonConsts.windowHeight * 0.6;
const styles = StyleSheet.create({
    gridHorizontal: {
        width: '100%',
        height: gridHeight,
            
    }
})

const getHorizontalStyle = (itemLength, index) => {
    itemLength =  itemLength <= 3 ? itemLength : 3;

    if (index === 0) {
        return {
            width: '60%',
            height: gridHeight,
            borderColor: colors.white,
            borderWidth: 1
        }
    } else if (index <= 3) {
        return {
            width: '40%',
            height: gridHeight / itemLength,
            position: 'absolute',
            right: 0,
            top: index === 1 ? 0 : gridHeight / itemLength * (index - 1),
            borderColor: colors.white,
            borderWidth: 1
        }
    }

    return {};
}

const getVerticalStyle = (itemLength, index) => {
    itemLength =  itemLength <= 3 ? itemLength : 3;    

    if (index === 0) {
        return {
            width: commonConsts.windowWidth,
            height: gridHeight * 0.6,
            borderColor: colors.white,
            borderWidth: 1,
        }
    } else if (index <= 3) {
        return {
            width: commonConsts.windowWidth / itemLength,
            height: gridHeight * 0.4 ,
            position: 'absolute',
            bottom: 0,
            left: index === 1 ? 0 : commonConsts.windowWidth / itemLength * (index - 1),
            borderColor: colors.white,
            borderWidth: 1
        }
    }

    return {};
}
