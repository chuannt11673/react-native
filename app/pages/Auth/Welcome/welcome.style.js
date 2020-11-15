import { Dimensions, StyleSheet } from 'react-native';
import { BrandColor } from '../../../utils/contants/colors.const';

const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    background: {
        flex: 1,
        width: windowWidth,
        justifyContent: 'center'
    },
    loginButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: BrandColor.white,
        borderRadius: 8,
        width: 160,
        alignSelf: 'center'
    },
    loginTitle: {
        color: BrandColor.white
    },
    externalLogin: {
        margin: 5,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: BrandColor.white,
        width: 46,
        height: 46,
        borderRadius: 23
    }
})
