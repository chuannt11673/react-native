import React from 'react'
import { Dimensions, StyleSheet, View, Image } from 'react-native'

import colors from '../config/color'

export default function ImagesGridComponent() {
    const images = [
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1474073705359-5da2a8270c64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    ];
    const windowWidth = Dimensions.get('window').width;
    const render = (item, index) => {
        return (
            <Image key={index} style={[getStyle(item, index), styles.item]} source={{ uri: item }} resizeMode='cover' />
        )
    }
    const getStyle = (item, index) => {
        if (index === 0) {
            return {
                width: '60%',
                height: windowWidth
            }
        }
        return {
            width: '40%',
            height: windowWidth / (images.length - 1),
            position: 'absolute',
            right: 0,
            top: index === 1 ? 0 : windowWidth / (images.length - 1) * (index - 1)
        }
    }
    
    return (
        <View style={styles.gridHorizontal}>
            {
                images.map((item, index) => render(item, index))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    gridHorizontal: {
        width: '100%',
        backgroundColor: colors.secondary,
    },
    item: {
        borderColor: colors.grey,
        borderWidth: 2
    }
})
