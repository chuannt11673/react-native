import { Dimensions, StyleSheet } from 'react-native';
import { BrandColor } from '../../../utils/contants/colors.const';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BrandColor.white
    }
})

export const itemStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BrandColor.white
    },
    item: {
        width: windowWidth,
		height: 100,
		borderBottomWidth: 1,
        borderBottomColor: BrandColor.borderColor,
        justifyContent: 'center',
    },
    avatar: {
		left: 10,
		marginRight: 20,
		width: 60,
		height: 60,
		borderRadius: 60,
    },
    name: {
        position: 'absolute',
		top: 25,
		left: 80,
		fontSize: 16,
		fontWeight: "bold"
    },
    message: {
        position: 'absolute',
		top: 50,
		left: 80,
		fontSize: 14,
		width: '60%',
    },
    time: {
        position: 'absolute',
		top: 10,
		right: 20,
		color: BrandColor.textColor
    },
    badge: {
        position: 'absolute',
		top: 30,
		right: 20,
		width: 30,
		backgroundColor: BrandColor.secondary,
		textAlign: "center",
		borderRadius: 12,
		padding: 2,
		justifyContent: 'center',
		alignItems: 'center'
    },
    text: {
        color: BrandColor.white
    }
})
