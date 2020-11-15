import React, { useState } from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { styles } from './welcome.style';
import ButtonComponent from '../../../components/Button/button.component';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import AuthContext from '../../../utils/context/auth.context';

export default function WelcomePage() {
    const [image, setImage] = useState(require('../../../assets/images/background-1.jpg'));
    const { signIn } = React.useContext(AuthContext);
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground
                source={image}
                style={styles.background}
                resizeMode='cover'
            >
                <View>
                    <ButtonComponent
                        title='Đăng nhập'
                        titleStyle={styles.loginTitle}
                        buttonStyle={styles.loginButton}
                        icon={
                            <SimpleLineIcons name="login" size={24} style={styles.loginTitle} />
                        }
                        onPress={
                            () => {
                                signIn('username', 'password');
                            }
                        }
                    />
                </View>
                <View style={{ top: 10, alignItems: 'center' }}>
                    <ButtonComponent
                        buttonStyle={styles.externalLogin}
                        icon={
                            <FontAwesome name="google" size={24} style={styles.loginTitle} />
                        }
                    />
                    <ButtonComponent
                        buttonStyle={styles.externalLogin}
                        icon={
                            <FontAwesome name="facebook" size={24} style={styles.loginTitle} />
                        }
                    />
                </View>
            </ImageBackground>
        </View>
    )
}
