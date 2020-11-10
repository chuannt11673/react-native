import { Dimensions, StyleSheet } from 'react-native';
import { BrandColor } from '../../utils/contants/colors.const';

const windowWidth = Dimensions.get('window').width;
const subItemDistance = 20;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BrandColor.white,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingTop: 10,
        paddingBottom: 10
    },
    avatar: {
        width: 60,
        height: 60,
        margin: 10,
        borderRadius: 30
    },
    content: {
        width: windowWidth - 85,
        padding: 10,
        backgroundColor: '#d9d9d9',
        borderRadius: 18
    },
    name: {
        fontWeight: '600'
    },
    action: {
        width: windowWidth,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: -5
    },
    time: {
        marginLeft: 95,
        fontSize: 13
    },
    viewMoreComments: {
        marginLeft: 90,
        fontSize: 14,
        color: BrandColor.secondary
    },
    subItem: {
        marginLeft: subItemDistance,
        paddingBottom: 0
    },
    subContent: {
        width: windowWidth - 85 - subItemDistance,
    },
    subAction: {
        width: windowWidth - subItemDistance,
    }
})
