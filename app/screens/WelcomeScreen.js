import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import colors from '../config/color';
import constants from '../shared/consts/CommonConsts';

export default function WelcomeScreen({ navigation }) {
    const image = require('../assets/in.png');
    const loginHandler = () => {
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.loginView}>
                    <TouchableOpacity onPress={loginHandler}>
                        <SimpleLineIcons name="login" size={constants.iconSize} color={colors.white} />
                    </TouchableOpacity>
                    <Text style={styles.loginText}>Đăng nhập</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
    },
    loginView: {
        alignItems: 'center',
        top: 100
    },
    loginText: {
        color: colors.white,
        fontSize: 16,
        padding: 5,
    }
})
