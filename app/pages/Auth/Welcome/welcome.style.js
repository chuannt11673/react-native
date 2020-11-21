import { Dimensions, StyleSheet } from 'react-native';
import { BrandColor } from '../../../utils/contants/colors.const';

const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BrandColor.white
    },
    header: {
        fontSize: 21,
        fontWeight: '600'
    },
    forgotPassword: {
        width: '79%',
        alignItems: 'flex-end'
    },
    forgotPasswordText: {
        color: '#3333ff'
    },
    loginButtonContainer: {
        width: '79%',
        marginTop: 30
    },
    loginButton: {
        backgroundColor: BrandColor.primary,
        borderRadius: 20,
        height: 50
    },
    otherLoginText: {
        marginTop: 30,
        fontSize: 16
    },
    externalLoginContainer: {
        width: '79%',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-around'
    },
    externalLoginButton: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#999999',
        backgroundColor: BrandColor.white
    },
    registerContainer: {
        marginTop: 20,
        flexDirection: 'row'
    },
    registerButtonText: {
        color: BrandColor.primary
    }
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

