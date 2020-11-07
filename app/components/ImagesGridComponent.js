import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

import colors from '../config/color'
import commonConsts from '../shared/consts/CommonConsts'

export default function ImagesGridComponent({ images }) {
    const [gridStyle, setGridStyle] = useState(styles.gridHorizontal);
    const [imageStyles, setImageStyles] = useState(images.map(_ => {
        return {};
    }));
    const [coverImageStyle, setCoverImageStyle] = useState({
        bottom: 0,
        right: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: colors.opacity5,
        backgroundColor: colors.white
    });
    const render = (item, index) => {
        return (
            <Image key={index} style={[imageStyles[index]]} source={{ uri: item }}/>
        )
    }
    const renderCoverImage = () => {
        if (images.length > 4) {
            return (
                <View style={coverImageStyle}>
                    <Text style={{ color: colors.black, fontSize: 19, fontWeight: 'bold', opacity: 0.5 }}>+{images.length - 4}</Text>
                </View>
            )
        }
        return null;
    }
    const getStyle = (index, selectMode) => {
        if (selectMode === mode.horizontal) {
            return getHorizontalStyle(images.length - 1, index);
        }

        return getVerticalStyle(images.length - 1, index);
    }
    const onInit = () => {
        Image.getSize(images[0], (width, height) => {
            if (images.length === 1) {
                const ratio = commonConsts.windowWidth / width;
                setImageStyles([{
                    width: commonConsts.windowWidth,
                    height: height * ratio,
                    borderColor: colors.white,
                    borderWidth: 1
                }]);
                setGridStyle({
                    ...gridStyle,
                    height: height * ratio
                })
                return;
            }

            const selectMode = width < height ? mode.horizontal : mode.vertical;
            const customStyles = images.map((item, index) => {
                return getStyle(index, selectMode);
            });
            setImageStyles(customStyles);

            const coverStyle = {
                ...coverImageStyle,
                width: customStyles[1].width,
                height: customStyles[1].height,
            };
            setCoverImageStyle(coverStyle);
        });
    }

    useEffect(() => {
        onInit();
    }, [])
    
    return (
        <View style={gridStyle}>
            {
                images.map((item, index) => render(item, index))
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
