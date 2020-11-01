import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import colors from '../config/color'

export default function AvatarComponent(props) {
    return (
        <View style={styles.contentItem}>
            <Image source={{
                uri: props.avatar
            }}
                style={styles.avatar}
                resizeMode="cover"
            />
            <Text style={styles.contentName}>{props.name}</Text>
            <Text numberOfLines={1} style={styles.contentMessage}>{props.message}</Text>
            {
                () => {
                    if (props.displayTime) {
                        return <Text style={styles.contentTime}></Text>
                    }
                    return null;
                }
            }
            {
                () => {
                    if (props.displayBadge) {
                        return <Text style={styles.contentBadge}></Text>
                    }
                    return null;
                }
            }
        </View>
    )
}

const styles = StyleSheet.create({
    contentItem: {
		width: '100%',
		height: 100,
		flexDirection: 'row',
		alignItems: 'center'
	},
	avatar: {
		left: 10,
		marginRight: 20,
		width: 60,
		height: 60,
		borderRadius: 60,
	},
	contentName: {
		position: 'absolute',
		top: 25,
		left: 80,
		fontSize: 16,
		fontWeight: "bold"
	},
	contentMessage: {
		position: 'absolute',
		top: 50,
		left: 80,
		fontSize: 14,
		width: '60%',
	},
	contentTime: {
		position: 'absolute',
		top: 10,
		right: 20,
		color: colors.color
	},
	contentBadge: {
		position: 'absolute',
		top: 30,
		right: 20,
		width: 30,
		backgroundColor: colors.secondary,
		color: colors.white,
		textAlign: "center",
		borderRadius: 12,
		padding: 2
	}
})
