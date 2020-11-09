import { Dimensions, StyleSheet } from 'react-native';
import { BrandColor } from '../../utils/contants/colors.const';

const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
		margin: 15,
		width: 60,
		height: 60,
		borderRadius: 60,
    },
    name: {
		fontSize: 16,
        fontWeight: 'bold',
        color: BrandColor.textColor
    },
    message: {
		fontSize: 14,
    },
})
