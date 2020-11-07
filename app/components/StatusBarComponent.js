import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import colors from '../config/color'

export default function StatusBarComponent({
    containerStyle,
    ...props
}) {
    containerStyle = containerStyle ?? { backgroundColor: colors.primary }
    return (
        <View style={[styles.container, containerStyle]}>
            <StatusBar
                backgroundColor={containerStyle.backgroundColor}
                translucent {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 44 : StatusBar.currentHeight,
        backgroundColor: colors.primary
    }
})
