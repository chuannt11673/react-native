import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { AntDesign, Ionicons } from '@expo/vector-icons';

import colors from '../config/color'
import constants from '../shared/consts/CommonConsts'

export default function ActionButtonsComponent() {
    return (
        <View style={styles.container}>
            <Button
                title='45'
                titleStyle={styles.titleButton}
                buttonStyle={styles.button}
                icon={
                    <AntDesign name="hearto" size={constants.iconSize} color={colors.secondary} />
                }
            />
            <Button
                title='12'
                titleStyle={styles.titleButton}
                buttonStyle={styles.button}
                icon={
                    <AntDesign name="message1" size={constants.iconSize} color={colors.color} />
                }
            />
            <Button
                type='clear'
                title='3'
                titleStyle={styles.titleButton}
                buttonStyle={styles.button}
                icon={
                    <Ionicons name="ios-share-alt" size={constants.iconSize} color={colors.color} />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 20,
    },
    titleButton: {
        color: colors.color,
        marginLeft: 3
    },
    button: {
        backgroundColor: colors.white,
    }
})
