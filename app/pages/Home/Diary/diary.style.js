import { StyleSheet } from 'react-native';
import { BrandColor } from '../../../utils/contants/colors.const';

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
        padding: 10
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})
