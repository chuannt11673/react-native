import { StyleSheet } from 'react-native';
import { BrandColor } from '../../utils/contants/colors.const';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: BrandColor.white,
    },
    text: {
        color: BrandColor.textColor,
        fontSize: 15,
        lineHeight: 19,
    },
    viewMore: {
        color: BrandColor.secondary,
    },
})
