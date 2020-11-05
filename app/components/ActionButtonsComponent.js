import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { SimpleLineIcons } from '@expo/vector-icons';

import colors from '../config/color'
import constants from '../shared/consts/CommonConsts'

export default function ActionButtonsComponent(props) {

    const renderHeart = () => {
        if (props.displayHeart) {
            return (
                <Button
                    title='45'
                    titleStyle={styles.titleButton}
                    buttonStyle={styles.button}
                    icon={
                        <SimpleLineIcons name="heart" size={constants.iconSize} color={colors.secondary} />
                    }
                />
            )
        }
        return null;
    }
    const renderComment = () => {
        if (props.displayComment) {
            return (
                <Button
                    title='12'
                    titleStyle={styles.titleButton}
                    buttonStyle={styles.button}
                    icon={
                        <SimpleLineIcons name="bubbles" size={constants.iconSize} color={colors.color} />
                    }
                />
            )
        }
        return null;
    }
    const renderShare = () => {
        if (props.displayShare) {
            return (
                <Button
                    type='clear'
                    title='3'
                    titleStyle={styles.titleButton}
                    buttonStyle={styles.button}
                    icon={
                        <SimpleLineIcons name="cursor" size={constants.iconSize} color={colors.color} />
                    }
                />
            )
        }
        return null;
    }

    return (
        <View style={[styles.container, props.containerStyle]}>
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
