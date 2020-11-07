import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import PostComponent from '../components/PostComponent';
import ActionButtonsComponent from '../components/ActionButtonsComponent';

import colors from '../config/color';
import constants from '../shared/consts/CommonConsts';
import StatusBarComponent from '../components/StatusBarComponent';

export default function CommentScreen() {
    const [data, setData] = useState([
        {
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            name: 'Valadimir',
            message: 'Điều duy nhất hai người hợp nhau đó là cả hai cùng im lặng và... biến mất',
            comments: [
                {
                    avatar: 'https://images.unsplash.com/photo-1472806426350-603610d85659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    name: 'Thùy Ly',
                    message: 'Điều duy nhất hai người hợp nhau đó là cả hai cùng im lặng và... biến mất'
                }
            ]
        },
        {
            avatar: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            name: 'Valerie',
            message: 'Điều duy nhất hai người hợp nhau đó là cả hai cùng im lặng và... biến mất',
            comments: [
                {
                    avatar: 'https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    name: 'Phương Ly',
                    message: 'Điều duy nhất hai người hợp nhau đó là cả hai cùng im lặng và... biến mất',
                },
                {
                    avatar: 'https://images.unsplash.com/photo-1467632499275-7a693a761056?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    name: 'Trang Đỗ',
                    message: 'Điều duy nhất hai người hợp nhau đó là cả hai cùng im lặng và... biến mất',
                }
            ]
        }
    ]);
    const renderAvatar = (uri) => {
        return (
            <Image
                source={{ uri: uri }}
                style={styles.avatar}
            />
        )
    }
    const renderMessage = (name, message, itemStyle) => {
        return (
            <View style={[styles.contentItem, itemStyle]}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: colors.color
                }}>{name}</Text>
                <Text>{message}</Text>
            </View>
        )
    }
    const renderButtons = () => {
        return (
            <ActionButtonsComponent
                displayHeart='true'
                displayComment='true'
                containerStyle={styles.buttons}
            />
        )
    }
    const renderSubComment = (item, index) => {
        return (
            <ListItem key={index} containerStyle={[styles.listItem, {
                marginLeft: 30,
            }]}>
                <View style={[styles.commentView]}>
                    {
                        renderAvatar(item.avatar)
                    }
                    {
                        renderMessage(item.name, item.message, {
                            width: constants.windowWidth - 125
                        })
                    }
                </View>
                {
                    renderButtons()
                }
            </ListItem>
        )
    }
    const renderComment = (item, index) => {
        const subComments = item.comments;
        return (
            <ListItem key={index} containerStyle={styles.listItem}>
                <View style={styles.commentView}>
                    {
                        renderAvatar(item.avatar)
                    }
                    {
                        renderMessage(item.name, item.message)
                    }
                </View>
                {
                    renderButtons()
                }
                {
                    subComments.map((cmt, i) => renderSubComment(cmt, i))
                }
            </ListItem>
        )
    }

    return (
        <>
            <StatusBarComponent
                containerStyle={{
                    backgroundColor: colors.white,
                    height: 0
                }}
                barStyle='dark-content'
            />
            <ScrollView style={styles.container}>

                <PostComponent />
                <View style={{ width: '100%', height: 15, backgroundColor: colors.white }} />
                {
                    data.map((item, index) => renderComment(item, index))
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    listItem: {
        padding: 0,
        margin: 0,
        flexWrap: 'wrap',
    },
    commentView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    contentItem: {
        justifyContent: 'flex-start',
        width: constants.windowWidth - 95,
        padding: 12,
        borderRadius: 21,
        backgroundColor: colors.white90
    },
    avatar: {
        alignSelf: 'center',
        left: 10,
        marginRight: 20,
        width: 60,
        height: 60,
        borderRadius: 60
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
    }
})
