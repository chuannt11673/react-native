import { Dimensions, StyleSheet } from 'react-native';
import { BrandColor } from '../../utils/contants/colors.const';

const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        backgroundColor: BrandColor.white,
        borderTopColor: BrandColor.borderColor,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    headerLeft: {
        width: '60%',
        flexDirection: 'row'
    },
    headerRight: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    emojiIcon: {
        color: BrandColor.secondary
    },
    textInput: {
        marginLeft: 10,
        minWidth: 200
    },
    imageIcon: {
        color: '#00b300',
    },
    videoIcon: {
        color: '#ff1ac6'
    },
    content: {
        minHeight: 200
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    image: {
        width: windowWidth * 0.333,
        height: windowWidth * 0.333,
        borderWidth: 1,
        borderColor: BrandColor.white
    }
})
