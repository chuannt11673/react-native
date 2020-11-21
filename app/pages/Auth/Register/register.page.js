import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as styles from './register.style';
import { Button } from 'react-native-elements';

const eyeIcons = {
    on: 'ios-eye',
    off: 'ios-eye-off'
}

function FunnyTextInput({ placeholder, leftIcon, rightIcon, secureTextEntry, containerStyle, inputStyle, onChangeText }) {
    const defaultHandler = (event) => {
        // do nothing
    };

    return (
        <View style={[styles.textInput.container, containerStyle]}>
            {
                leftIcon
            }
            <TextInput
                style={[styles.textInput.input, inputStyle]}
                placeholder={placeholder ?? 'place holder...'}
                placeholderTextColor='#999999'
                secureTextEntry={secureTextEntry}
                onChangeText={
                    onChangeText ?? defaultHandler
                }
            />
            {
                rightIcon
            }
        </View>
    )
}

export default function RegisterPage({ navigation }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isMatched, setIsMatched] = useState(false);
    const [securePassword, setSecurePassword] = useState(true);
    const [eyeIconName, setEyeIconName] = useState(eyeIcons.off);

    const signupHandler = () => {
        if (!username || !password || !isMatched)
            return;
            
        navigation.navigate('Welcome');
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView
                style={styles.styles.container}
            >
                <Text style={styles.styles.header}>Đăng ký</Text>
                <FunnyTextInput
                    placeholder='Email hoặc số điện thoại'
                    leftIcon={
                        <AntDesign name="user" size={24} color="#666666" />
                    }
                    containerStyle={{
                        marginTop: 15,
                        marginBottom: 15
                    }}
                    inputStyle={{
                        width: '90%',
                        fontSize: 16
                    }}
                    onChangeText={
                        (value) => setUsername(value)
                    }
                />
                <FunnyTextInput
                    placeholder='Mật khẩu'
                    leftIcon={
                        <AntDesign name="lock" size={24} color="#666666" />
                    }
                    rightIcon={
                        <Ionicons name={eyeIconName} size={24} color="#666666" onPress={
                            () => {
                                const iconName = eyeIconName === eyeIcons.on ? eyeIcons.off : eyeIcons.on;
                                setEyeIconName(iconName);
                                setSecurePassword(!securePassword);
                            }
                        } />
                    }
                    containerStyle={{
                        marginBottom: 15
                    }}
                    inputStyle={{
                        width: '80%',
                        fontSize: 16
                    }}
                    secureTextEntry={securePassword}
                    onChangeText={
                        (value) => setPassword(value)
                    }
                />
                <FunnyTextInput
                    placeholder='Nhập lại mật khẩu'
                    leftIcon={
                        <AntDesign name="lock" size={24} color="#666666" />
                    }
                    rightIcon={
                        isMatched ? <AntDesign name="checkcircle" size={24} color="#00e600" /> : null
                    }
                    containerStyle={{
                        marginBottom: 15
                    }}
                    inputStyle={{
                        width: '80%',
                        fontSize: 16
                    }}
                    secureTextEntry={securePassword}
                    onChangeText={
                        (value) => {
                            const match = value === password;
                            setIsMatched(match);
                        }
                    }
                />
                <Button
                    title='Đăng ký'
                    containerStyle={styles.styles.loginButtonContainer}
                    buttonStyle={styles.styles.loginButton}
                    onPress={
                        signupHandler
                    }
                />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
