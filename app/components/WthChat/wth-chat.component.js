import React, { useEffect, useState } from 'react';
import { View, Keyboard, Text, ScrollView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import ButtonComponent from '../Button/button.component';

import { styles } from './wth-chat.style';
import { TextInput } from 'react-native';

export default function WthChatComponent() {
    const [displayContent, setDisplayContent] = useState(false);
    const [displayKeyboard, setDisplayKeyboard] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardWillHide', _keyboardWillHide);

        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardWillHide', _keyboardWillHide);
        }
    }, []);

    const _keyboardDidShow = (event) => {
        _setKeyboardHeight(event);
        setDisplayContent(false);
        setDisplayKeyboard(true);
    };

    const _keyboardWillHide = () => {
        setDisplayKeyboard(false);
    };

    const _setKeyboardHeight = (event) => {
        const height = event.endCoordinates.height;
        setKeyboardHeight(height);
    }

    const emojiHandler = (event) => {
        if (displayKeyboard)
            Keyboard.dismiss();
        setDisplayContent(!displayContent);
    };


    return (
        <View
            style={[styles.container, { paddingBottom: displayKeyboard ? keyboardHeight : 20 }]}
        >
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
                        autoFocus={true}
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
                displayContent && !displayKeyboard ? (
                    <ScrollView style={{ height: keyboardHeight - 20 }}>
                        <View>
                            <Text>Content here</Text>
                        </View>
                    </ScrollView>
                ) : null
            }
        </View>
    )
}
