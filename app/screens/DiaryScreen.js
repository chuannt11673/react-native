import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import ActionButtonsComponent from '../components/ActionButtonsComponent'

import AvatarComponent from '../components/AvatarComponent'
import ImagesGridComponent from '../components/ImagesGridComponent'
import MaxLengthTextComponent from '../components/MaxLengthTextComponent'
import StatusBarComponent from '../components/StatusBarComponent'
import colors from '../config/color'
import CommonConsts from '../shared/consts/CommonConsts'

export default function DiaryScreen({ navigation }) {

    const [option, setOption] = useState(1);
    const data = [
        {
            id: '1',
            avatar: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            name: 'Valeria',
            message: '1 minute ago'
        },
        {
            id: '2',
            avatar: 'https://images.unsplash.com/photo-1472806426350-603610d85659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            name: 'Phương Linh',
            message: '1 minute ago'
        }
    ];
    const getActiveStyle = (value) => {
        if (option === value) {
            return {
                borderBottomColor: colors.white,
                borderBottomWidth: 3
            }
        }
        return {};
    };
    const pressHanler = (event) => {
        if (event === 'comment') {
            navigation.navigate('Comment');
        }
    }
    const renderData = (value) => {
        const item = value.item;
        return (
            <View>
                <AvatarComponent
                    avatar={item.avatar}
                    name={item.name}
                    message={item.message}
                />
                <ImagesGridComponent
                    images={[
                        'https://images.unsplash.com/photo-1510832198440-a52376950479?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    ]}
                />
                <MaxLengthTextComponent
                    text='Sự thật là… Chúng ta trốn vì muốn được tìm thấy. Chúng ta bỏ đi vì muốn biết ai sẽ theo mình. Chúng ta khóc để xem ai sẽ lau đi giọt lệ. Và chúng ta để trái tim tan vỡ, muốn thấy ai sẽ đến và chữa lành trái tim ta.'
                />
                <ActionButtonsComponent
                    displayHeart='true'
                    displayComment='true'
                    displayShare='true'
                    containerStyle={styles.containerStyleButtons}
                    onPress={
                        pressHanler
                    }
                />
            </View>
        );
    };

    return (
        <>
            <StatusBarComponent
                barStyle='light-content'
            />
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Icon name="menu" color={colors.white} containerStyle={styles.headerLeftIcon} />
                    <Text style={styles.headerText}>Colo</Text>
                    <Icon name="notifications" color={colors.white} containerStyle={styles.headerRightIcon} />
                </View>
                <View style={styles.subHeader}>
                    <TouchableOpacity onPress={
                        () => setOption(1)
                    }>
                        <View style={[styles.subHeaderView, getActiveStyle(1)]}>
                            <Text style={styles.subHeaderText}>Bảng tin</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        () => setOption(2)
                    }>
                        <View style={[styles.subHeaderView, getActiveStyle(2)]}>
                            <Text style={styles.subHeaderText}>Top</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderData}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        height: 44,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        color: colors.white
    },
    headerLeftIcon: {
        position: 'absolute',
        left: 20,
        marginRight: 20
    },
    headerRightIcon: {
        position: 'absolute',
        right: 20,
        marginLeft: 20
    },
    subHeader: {
        height: 36,
        backgroundColor: colors.primary,
        flexDirection: 'row'
    },
    subHeaderView: {
        width: CommonConsts.windowWidth / 2,
        height: 36,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    subHeaderText: {
        color: colors.white
    },
    content: {
        flex: 0.92
    },
    contentImages: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width
    },
    containerStyleButtons: {
        borderBottomColor: colors.grey,
        borderBottomWidth: 1
    }
})
