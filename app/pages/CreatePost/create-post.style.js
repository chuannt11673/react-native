import { Dimensions, StyleSheet } from 'react-native';
import { BrandColor } from '../../utils/contants/colors.const';

const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BrandColor.white
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: '500'
    },
    buttonContainer: {
        marginTop: 2,
        marginRight: 6
    },
    button: {
        borderColor: BrandColor.borderColor,
        borderWidth: 1,
        borderRadius: 12,
        paddingTop: 2,
        paddingBottom: 2,
    },
    headerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textInputContainer: {
        padding: 15
    },
    textInput: {
        fontSize: 15
    }
})
