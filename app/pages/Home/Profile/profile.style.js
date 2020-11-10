import { StyleSheet } from 'react-native';
import { BrandColor } from '../../../utils/contants/colors.const';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BrandColor.white
    },
    reorderArea: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    reorderTouchMove: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: -25,
        borderWidth: 1,
        borderColor: BrandColor.borderColor,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BrandColor.white
    },
    titleArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    titleName: {
        fontSize: 21,
        fontWeight: 'bold',
        color: BrandColor.textColor
    },
    titleInfo: {
        fontSize: 16,
        color: BrandColor.textColor
    },
    contentArea: {
        padding: 15,
        borderBottomColor: BrandColor.borderColor,
        borderBottomWidth: 1,
    },
    contentText: {
        fontSize: 17,
        color: BrandColor.textColor,
        lineHeight: 23
    },
    moreInfoView: {
        padding: 30,
        borderBottomColor: BrandColor.borderColor,
        borderBottomWidth: 1,
    },
    moreInfoText: {
        fontSize: 17,
        marginBottom: 6,
        marginLeft: 10,
        color: BrandColor.textColor
    },
    moreInfoButtonView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    moreInfoButtonTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: BrandColor.textColor
    },
    moreInfoButtonContainer: {
        marginRight: 10,
        marginBottom: 10,
    },
    moreInfoButton: {
        borderWidth: 1,
        borderRadius: 21,
        borderColor: BrandColor.borderColor,
        backgroundColor: BrandColor.white
    },
})
