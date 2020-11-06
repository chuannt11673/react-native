import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { SimpleLineIcons } from '@expo/vector-icons';

import colors from '../config/color'
import constants from '../shared/consts/CommonConsts'

export default function ActionButtonsComponent({
    displayHeart,
    displayComment,
    displayShare,
    containerStyle,
    onPress
}) {

    if (!onPress) {
        onPress = (event) => {
            console.log('Please handler press event');
        }
    }

    const renderHeart = () => {
        if (displayHeart) {
            return (
                <Button
                    title='45'
                    titleStyle={styles.titleButton}
                    buttonStyle={styles.button}
                    icon={
                        <SimpleLineIcons name="heart" size={constants.iconSize} color={colors.secondary} />
                    }
                    onPress={
                        () => onPress('like')
                    }
                />
            )
        }
        return null;
    }
    const renderComment = () => {
        if (displayComment) {
            return (
                <Button
                    title='12'
                    titleStyle={styles.titleButton}
                    buttonStyle={styles.button}
                    icon={
                        <SimpleLineIcons name="bubbles" size={constants.iconSize} color={colors.color} />
                    }
                    onPress={
                        () => onPress('comment')
                    }
                />
            )
        }
        return null;
    }
    const renderShare = () => {
        if (displayShare) {
            return (
                <Button
                    type='clear'
                    title='3'
                    titleStyle={styles.titleButton}
                    buttonStyle={styles.button}
                    icon={
                        <SimpleLineIcons name="cursor" size={constants.iconSize} color={colors.color} />
                    }
                    onPress={
                        () => onPress('share')
                    }
                />
            )
        }
        return null;
    }

    return (
        <View style={[styles.container, containerStyle]}>
            {
                renderHeart()
            }
            {
                renderComment()
            }
            {
                renderShare()
            }
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
        fontSize: 13,
        marginLeft: 5
    },
    button: {
        backgroundColor: colors.white,
    }
})
