import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Dimensions, FlatList, Platform } from 'react-native'
import { Icon } from 'react-native-elements'

import AvatarComponent from '../components/AvatarComponent'
import ImagesGridComponent from '../components/ImagesGridComponent'
import colors from '../config/color'

export default function DiaryScreen() {
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
    const optionHanler = (value) => {
        setOption(value);
    };
    const setActiveOption = (value) => {
        if (option === value) {
            return styles.subHeaderTextActive;
        }
        return {};
    };
    const renderData = (value) => {
        const item = value.item;
        return (
            <View>
                <AvatarComponent
                    avatar={item.avatar}
                    name={item.name}
                    message={item.message}
                />
                <ImagesGridComponent />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <View style={styles.header}>
                <Icon name="menu" color={colors.white} containerStyle={styles.headerLeftIcon} />
                <Text style={styles.headerText}>Colo</Text>
                <Icon name="notifications" color={colors.white} containerStyle={styles.headerRightIcon} />
            </View>
            <View style={styles.subHeader}>
                <Text style={[styles.subHeaderText, setActiveOption(1)]} onPress={() => optionHanler(1)}>Bảng Tin</Text>
                <Text style={[styles.subHeaderText, setActiveOption(2)]} onPress={() => optionHanler(2)}>Top</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderData}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
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
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingBottom: 10
    },
    subHeaderText: {
        width: '30%',
        color: colors.white,
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 10
    },
    subHeaderTextActive: {
        borderBottomWidth: 2,
        borderBottomColor: colors.grey
    },
    content: {
        flex: 0.92,
        backgroundColor: colors.white
    },
    contentImages: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width
    }
})
