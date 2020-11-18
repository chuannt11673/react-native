import { Dimensions, StyleSheet } from 'react-native';
import { BrandColor } from '../../../utils/contants/colors.const';

const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BrandColor.white
    },
    item: {
        paddingBottom: 10,
        borderBottomColor: BrandColor.borderColor,
        borderBottomWidth: 1
    },
    content: {
        padding: 10,
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    header: {
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 5
    },
    headerAvatar: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 16
    },
    headerActions: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    headerContainer: {
        width: windowWidth / 3,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: BrandColor.borderColor,
        borderRadius: 0
    },
    headerTitleStyle: {
        fontSize: 13
    }
})
