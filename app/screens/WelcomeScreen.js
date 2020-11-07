import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import colors from '../config/color';
import constants from '../shared/consts/CommonConsts';
import AuthContext from '../shared/contexts/AuthContext';
import StatusBarComponent from '../components/StatusBarComponent';

export default function WelcomeScreen() {
    const { signIn } = React.useContext(AuthContext);
    const credential = {
        username: 'Tien',
        password: 'Nguyen'
    }

    const loginHandler = () => {
        signIn(credential);
    }

    return (
        <>
            <StatusBarComponent
                barStyle='light-content'
            />
            <View style={styles.container}>
                <ImageBackground source={require('../assets/in.png')} style={styles.image}>
                    <View style={styles.loginView}>
                        <TouchableOpacity onPress={loginHandler} style={{ alignItems: 'center' }}>
                            <SimpleLineIcons name="login" size={constants.iconSize} color={colors.white} />
                            <Text style={styles.loginText}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
