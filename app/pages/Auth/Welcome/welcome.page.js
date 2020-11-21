import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import AuthContext from '../../../utils/context/auth.context';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as styles from './welcome.style';
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

export default function WelcomePage({ navigation }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [securePassword, setSecurePassword] = useState(true);
    const [eyeIconName, setEyeIconName] = useState(eyeIcons.off);

    const { signIn } = React.useContext(AuthContext);

    const signInHandler = () => {
        signIn(username, password);
    }

    const register = () => {
        navigation.navigate('Register');
    }

    return (
        <TouchableWithoutFeedback onPress={
            Keyboard.dismiss
        }>
            <SafeAreaView style={styles.styles.container}>
                <Text style={styles.styles.header}>Đăng nhập</Text>
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
                <View style={styles.styles.forgotPassword}>
                    <Text style={styles.styles.forgotPasswordText}>Quên mật khẩu?</Text>
                </View>
                <Button
                    title='Đăng nhập'
                    containerStyle={styles.styles.loginButtonContainer}
                    buttonStyle={styles.styles.loginButton}
                    onPress={
                        signInHandler
                    }
                />
                <Text style={styles.styles.otherLoginText}>Hoặc đăng nhập với...</Text>
                <View style={styles.styles.externalLoginContainer}>
                    <Button
                        title='Google'
                        icon={
                            <Image
                                source={require('../../../assets/images/icons8-google-48.png')}
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                        }
                        titleStyle={{
                            marginLeft: 8,
                            color: 'black'
                        }}
                        buttonStyle={styles.styles.externalLoginButton}
                    />
                    <Button
                        title='Facebook'
                        icon={
                            <Image
                                source={require('../../../assets/images/icons8-facebook-circled-48.png')}
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                        }
                        titleStyle={{
                            marginLeft: 8,
                            color: 'black'
                        }}
                        buttonStyle={styles.styles.externalLoginButton}
                    />
                </View>
                <View style={styles.styles.registerContainer}>
                    <Text>
                        Bạn chưa có tài khoản?
                </Text>
                    <TouchableOpacity
                        style={{
                            marginLeft: 6
                        }}
                        onPress={
                            register
                        }
                    >
                        <Text style={styles.styles.registerButtonText}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

