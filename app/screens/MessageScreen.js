import React, { useState } from 'react'
import { Text, View, Image, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import StatusBarComponent from '../components/StatusBarComponent'
import colors from '../config/color'

export default function MessageScreen() {
	const [messages] = useState([
		{
			avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			name: 'Phương Ly',
			message: 'Tối nay 8h em mới đi khách về, hẹn anh 8h nhé :D'
		},
		{
			avatar: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			name: 'Uyên',
			message: 'Tối nay 9h em mới đi khách về, hẹn anh 8h nhé :D'
		},
		{
			avatar: 'https://images.unsplash.com/photo-1467632499275-7a693a761056?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			name: 'Jean',
			message: 'Tối nay 10h em mới đi khách về, hẹn anh 8h nhé :D'
		},
		{
			avatar: 'https://images.unsplash.com/photo-1472806426350-603610d85659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			name: 'Linh',
			message: 'Tối nay 8h em mới đi khách về, hẹn anh 8h nhé :D'
		},
		{
			avatar: 'https://images.unsplash.com/photo-1438109491414-7198515b166b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			name: 'Tú',
			message: 'Tối nay 9h em mới đi khách về, hẹn anh 8h nhé :D'
		},
		{
			avatar: 'https://images.unsplash.com/photo-1545912453-db258ca9b7b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			name: 'Diệp',
			message: 'Tối nay 10h em mới đi khách về, hẹn anh 8h nhé :D'
		},
		{
			avatar: 'https://images.unsplash.com/photo-1482555670981-4de159d8553b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			name: 'Mai',
			message: 'Tối nay 8h em mới đi khách về, hẹn anh 8h nhé :D'
		},
		{
			avatar: 'https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			name: 'Huyền',
			message: 'Tối nay 9h em mới đi khách về, hẹn anh 8h nhé :D'
		},
		{
			avatar: 'https://images.unsplash.com/photo-1562003389-902303a38425?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			name: 'Trang',
			message: 'Tối nay 10h em mới đi khách về, hẹn anh 8h nhé :D'
		}
	])
	const renderMessage = (message, index) => {
		return (
			<View key={index} style={styles.contentItem}>
				<Image source={{
					uri: message.avatar
				}}
					style={styles.avatar}
					resizeMode="cover"
				/>
				<Text style={styles.contentName}>{message.name}</Text>
				<Text numberOfLines={1} style={styles.contentMessage}>{message.message}</Text>
				<Text style={styles.contentTime}>11:31 AM</Text>
				<View style={styles.contentBadge}>
					<Text style={{ color: colors.white }}>2</Text>
				</View>
			</View>
		)
	}
	return (
		<>
			<StatusBarComponent
                barStyle='light-content'
            />
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<Icon name="menu" color={colors.white} containerStyle={styles.headerLeftIcon} />
					<Text style={styles.headerText}>Tin nhắn</Text>
					<Icon name="notifications" color={colors.white} containerStyle={styles.headerRightIcon} />
				</View>
				<ScrollView style={styles.content}>
					{
						messages.map((item, index) => renderMessage(item, index))
					}
				</ScrollView>
			</SafeAreaView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
	},
	header: {
		height: 44,
		backgroundColor: colors.primary,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerText: {
		fontSize: 18,
		color: colors.white,
	},
	headerLeftIcon: {
		position: 'absolute',
		left: 20,
		marginRight: 20
	},
	headerRightIcon: {
		position: 'absolute',
		right: 20,
		marginLeft: 20
	},
	content: {
		flex: 0.92
	},
	contentItem: {
		width: '100%',
		height: 100,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: '#e6e6e6',
		borderBottomWidth: 1
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
		textAlign: "center",
		borderRadius: 12,
		padding: 2,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
