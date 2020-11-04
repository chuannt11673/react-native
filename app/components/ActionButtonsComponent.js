import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { EvilIcons } from '@expo/vector-icons';

import colors from '../config/color'
import constants from '../shared/consts/CommonConsts'

export default function ActionButtonsComponent() {
    return (
        <View style={styles.container}>
            <Button
                type='clear'
                title='45'
                titleStyle={styles.title}
                icon={
                    <EvilIcons
                        name="heart"
                        color={colors.secondary}
                        size={constants.iconSize}
                    />
                }
            />
            <Button
                type='clear'
                title='12'
                titleStyle={styles.title}
                icon={
                    <EvilIcons
                        name="comment"
                        size={constants.iconSize}
                        color={colors.black}
                    />
                }
            />
            <Button
                type='clear'
                title='45'
                titleStyle={styles.title}
                icon={
                    <EvilIcons
                        name="share-google"
                        size={constants.iconSize}
                        color={colors.black}
                    />
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
        paddingBottom: 20,        
    },
    title: {
        color: colors.color
    }
})
