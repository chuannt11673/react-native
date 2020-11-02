import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import colors from '../config/color'

export default function ImagesGridComponent() {
    return (
        <View style={styles.gridHorizontal}>
        </View>
    )
}

const styles = StyleSheet.create({
    gridHorizontal: {
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
        backgroundColor: colors.secondary
    }
})
