import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, ScrollView, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import AvatarComponent from '../components/AvatarComponent';
import ImageGridComponent from '../components/ImageGridComponent';

import colors from '../config/color'

export default function DiaryScreen() {
    const [option, setOption] = useState(1);
    const [images, setImages] = useState([
        { uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { uri: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { uri: 'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }
    ]);

    const optionHanler = (value) => {
        setOption(value);
    };
    const setActiveOption = (value) => {
        if (option === value) {
            return styles.subHeaderTextActive;
        }
        return {};
    }

    

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
            <ScrollView style={styles.content}>
                <AvatarComponent
                    avatar={"https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
                    name="Valerie"
                    message="1 minute ago"
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header: {
        flex: 0.08,
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
        flex: 0.06,
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
