import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'

import colors from '../config/color'

export default function ActionButtonsComponent() {
    return (
        <View style={styles.container}>
            <Button
                type='clear'
                title='45'
                titleStyle={styles.title}
            />
            <Button
                type='clear'
                title='12'
                titleStyle={styles.title}
            />
            <Button
                type='clear'
                title='45'
                titleStyle={styles.title}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 20,
        paddingBottom: 20,        
    },
    title: {
        color: colors.color
    },
    icon: {
        marginRight: 3,
    }
})
