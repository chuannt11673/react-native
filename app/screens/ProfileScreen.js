import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FontAwesome, EvilIcons } from '@expo/vector-icons';

import constants from '../shared/consts/CommonConsts'
import colors from '../config/color'
import { Button, ListItem } from 'react-native-elements';
import PostComponent from '../components/PostComponent';

export default function ProfileScreen() {
    const [avatarStyle, setAvatarStyle] = useState({});
    const user = {
        avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    }
    const data = [
        {
            id: '1',
            avatar: 'https://images.unsplash.com/photo-1472806426350-603610d85659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            name: 'Phương Linh',
            message: '1 minute ago'
        }
    ];

    useEffect(() => {
        Image.getSize(user.avatar, (width, height) => {
            const ratio = constants.windowWidth / width;
            setAvatarStyle({
                width: width * ratio,
                height: height * ratio
            })
        });
    }, []);

    const renderData = (item, index) => {
        return (
            <ListItem key={index}
                containerStyle={styles.listItem}
            >
                <PostComponent
                    id={item.id}
                    name={item.name}
                    message={item.message}
                />
            </ListItem>
        );
    };

    return (
        <ScrollView>
            <Image
                source={{
                    uri: user.avatar
                }}
                style={[avatarStyle]}
            />
            <View style={styles.reorderArea}>
                <View style={styles.reorderTouchMove}>
                    <FontAwesome name="reorder" size={constants.iconSize} color={colors.black} />
                </View>
            </View>
            <View style={styles.titleArea}>
                <View>
                    <Text style={styles.titleName}>Lê Trung Đức</Text>
                    <Text style={styles.titleInfo}>Nam, 25 tuổi</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <EvilIcons name="heart" size={constants.iconSizeLarge} color={colors.secondary} />
                    <Text>25 theo dõi</Text>
                </View>
            </View>
            <View style={styles.contentArea}>
                <Text style={styles.contentText}>
                    Đôi khi chúng ta không hiểu rõ kết quả của những việc mình làm, thế nên cứ tự chuốc lấy những buồn khổ chẳng đáng có.
                    Ai muốn hạnh phúc mà chẳng phải sống qua những ngày tháng không bình yên.
                </Text>
            </View>
            <View style={styles.moreInfoView}>
                <Text style={styles.moreInfoText}>Đang ở Hoàng Mai, Hà Nội</Text>
                <Text style={styles.moreInfoText}>Làm việc tại Colo dating</Text>
                <Text style={styles.moreInfoText}>Từng học tại Đại Học Lâm Nghiệp</Text>
                <View style={styles.moreInfoButtonView}>
                    <Button title='Chơi Game'
                        titleStyle={styles.moreInfoButtonTitle}
                        buttonStyle={styles.moreInfoButton}
                        containerStyle={styles.moreInfoButtonContainer}
                    />
                    <Button title='Đọc Sách'
                        titleStyle={styles.moreInfoButtonTitle}
                        buttonStyle={styles.moreInfoButton}
                        containerStyle={styles.moreInfoButtonContainer}
                    />
                    <Button title='nghe Nhạc'
                        titleStyle={styles.moreInfoButtonTitle}
                        buttonStyle={styles.moreInfoButton}
                        containerStyle={styles.moreInfoButtonContainer}
                    />
                    <Button title='Nhiếp Ảnh'
                        titleStyle={styles.moreInfoButtonTitle}
                        buttonStyle={styles.moreInfoButton}
                        containerStyle={styles.moreInfoButtonContainer}
                    />
                    <Button title='Ăn Uống'
                        titleStyle={styles.moreInfoButtonTitle}
                        buttonStyle={styles.moreInfoButton}
                        containerStyle={styles.moreInfoButtonContainer}
                    />
                </View>
            </View>
            {
                data.map((item, index) => renderData(item, index))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    reorderArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: colors.black,
    },
    reorderTouchMove: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: -25,
        borderWidth: 1,
        backgroundColor: colors.white,
        borderColor: colors.black,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
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
        opacity: colors.opacity8
    },
    titleInfo: {
        fontSize: 16,
        color: colors.color
    },
    contentArea: {
        padding: 15,
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
    },
    contentText: {
        fontSize: 19,
        color: colors.color,
        lineHeight: 23
    },
    moreInfoView: {
        padding: 30,
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
    },
    moreInfoText: {
        fontSize: 18,
        opacity: colors.opacity7,
        marginBottom: 6,
        marginLeft: 10
    },
    moreInfoButtonView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    moreInfoButtonTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.color
    },
    moreInfoButtonContainer: {
        marginRight: 15,
        marginBottom: 15,        
    },
    moreInfoButton: {
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: colors.white,
        borderColor: colors.color,
        borderWidth: 1,
        borderRadius: 21,
    },
    listItem: {
        padding: 0,
    }
})
