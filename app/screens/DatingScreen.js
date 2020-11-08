import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import ImageComponent from '../components/ImageComponent'
import StatusBarComponent from '../components/StatusBarComponent'
import colors from '../config/color'
import consts from '../shared/consts/CommonConsts'

export default function DatingScreen() {
    const [option, setOption] = useState(1);
    const [data, fetchData] = useState([
        {
            id: '1',
            name: 'Kim Chi',
            avatar: 'https://images.unsplash.com/photo-1514813482567-2858e6c00ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            distance: '',            
        },
        {
            id: '2',
            name: 'Callie',
            avatar: 'https://images.unsplash.com/photo-1473707669572-40d832255b5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            distance: '',            
        },
        {
            id: '3',
            name: 'Averie',
            avatar: 'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            distance: '',            
        },
        {
            id: '4',
            name: 'Neelam',
            avatar: 'https://images.unsplash.com/photo-1569124589354-615739ae007b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            distance: '',            
        },
        {
            id: '5',
            name: 'Taylor',
            avatar: 'https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            distance: '',            
        }
    ])
    const getActiveStyle = (value) => {
        if (option === value) {
            return {
                borderBottomColor: colors.white,
                borderBottomWidth: 3
            }
        }
        return {};
    };
    
    return (
        <>
            <StatusBarComponent />
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
                            <Text style={styles.subHeaderText}>Hẹn hò</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        () => setOption(2)
                    }>
                        <View style={[styles.subHeaderView, getActiveStyle(2)]}>
                            <Text style={styles.subHeaderText}>Quanh đây</Text>
                        </View>
                    </TouchableOpacity>
                </View>                
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
        width: consts.windowWidth / 2,
        height: 36,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    subHeaderText: {
        color: colors.white
    },
})
