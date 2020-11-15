import React, { useEffect, useState } from 'react';
import { View, Keyboard, Text, ScrollView, SafeAreaView, Platform, Dimensions } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import ButtonComponent from '../Button/button.component';

import { styles } from './wth-chat.style';
import { TextInput } from 'react-native';

const windowHeight = Dimensions.get('window').height;
export default function WthChatComponent() {
    const [displayContent, setDisplayContent] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(windowHeight * 0.35);

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
        }
    }, []);

    const _keyboardDidShow = (event) => {
        const height = Platform.OS === 'ios' ? event.endCoordinates.height - 32 : event.endCoordinates.height;
        setKeyboardHeight(height);
    }

    const emojiHandler = () => {
        Keyboard.dismiss();
        setDisplayContent(!displayContent);
    };

    const renderContent = () => {
        if (!displayContent)
            return null;

        return (
            <ScrollView style={{ height: keyboardHeight }}>
                <View>
                    <Text>Content here</Text>
                </View>
            </ScrollView>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <ButtonComponent
                        icon={
                            <AntDesign name="user" size={23} style={styles.emojiIcon} />
                        }
                        onPress={
                            emojiHandler
                        }
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Cảm xúc / Hoạt động'
                        autoFocus={false}
                        onFocus={
                            () => setDisplayContent(false)
                        }
                    />
                </View>
                <View style={styles.headerRight}>
                    <ButtonComponent
                        icon={
                            <FontAwesome name="file-image-o" size={23} style={styles.imageIcon} />
                        }
                    />
                    <ButtonComponent
                        icon={
                            <FontAwesome name="video-camera" size={23} style={styles.videoIcon} />
                        }
                    />
                </View>
            </View>
            {
                renderContent()
            }
        </SafeAreaView>
    )
}
