import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import colors from '../config/color';

export default function WelcomeScreen() {

    const loginHandler = () => {
        console.log('login tapped');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("../assets/background.jpg")}
                style={styles.backgroundImage}
            >
                <TouchableHighlight style={styles.loginButton} onPress={loginHandler}>
                    <View>
                        <Text style={styles.loginText}>Login</Text>
                    </View>
                </TouchableHighlight>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    backgroundImage: {
        flex: 1,
        flexDirection: 'row',
        resizeMode: 'cover',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    loginButton: {
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 20,
        alignSelf: 'flex-end',
        bottom: 60,
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        color: colors.white,
        fontSize: 16
    }
})
