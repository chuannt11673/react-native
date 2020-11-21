import { StyleSheet } from 'react-native';
import { BrandColor } from '../../../utils/contants/colors.const';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BrandColor.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 21,
        fontWeight: '600'
    },
    loginButtonContainer: {
        width: '79%',
        marginTop: 20
    },
    loginButton: {
        backgroundColor: BrandColor.primary,
        borderRadius: 20,
        height: 50
    },
})

export const textInput = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 20,
        height: 51,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        width: '80%'
    },
    input: {
        width: '80%',
        height: 40,
        marginLeft: 5
    }
})
