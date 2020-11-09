import { from } from "rxjs"
import { StyleSheet } from 'react-native';
import { BrandColor } from '../../utils/contants/colors.const';

export const styles = StyleSheet.create({
    container: {

    },
    button: {
        backgroundColor: BrandColor.white,
    },
    title: {
        color: BrandColor.textColor,
        fontSize: 17,
        marginLeft: 4
    }
})
