import { Dimensions, StyleSheet } from 'react-native';
import { BrandColor } from '../../utils/contants/colors.const';

const windowWidth = Dimensions.get('window').width;
const height = Dimensions.get('window').height * 0.5;
export const styles = StyleSheet.create({
    grid: {
        width: windowWidth,
        height: height,
        overflow: 'hidden'
    },
    item: {
        borderWidth: 1,
        borderColor: BrandColor.white
    }
})
