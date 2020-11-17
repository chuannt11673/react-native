import React, { useEffect, useState, useRef } from 'react';
import { View, Keyboard, SafeAreaView, Platform, Dimensions, Animated } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import ButtonComponent from '../Button/button.component';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';

import { styles } from './wth-chat.style';
import { TextInput } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function WthChatComponent() {
    const [displayContent, setDisplayContent] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(windowHeight * 0.35);
    const [isFocusTextInput, setIsFocus] = useState(false);
    const [textValue, setTextValue] = useState('');
    const height = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        openEmoji();
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
        }
    }, [displayContent]);

    const openEmoji = () => {
        const toValue = displayContent ? keyboardHeight : 0;
        const duration  = isFocusTextInput ? 0 : 200;
        Animated.timing(
            height,
            {
                toValue: toValue,
                duration: duration,
                useNativeDriver: false,
                isInteraction: false
            }
        ).start();
    }

    const _keyboardDidShow = (event) => {
        const height = Platform.OS === 'ios' ? event.endCoordinates.height - 32 : event.endCoordinates.height;
        setKeyboardHeight(height);
    }

    const emojiHandler = () => {
        setDisplayContent(!displayContent);
    };

    const renderContent = () => {
        return (
            <Animated.View style={{ height: height }}>
                {
                    displayContent ? (
                        <View style={{ height: keyboardHeight }}>
                            <EmojiSelector
                                category={Categories.history}
                                showSearchBar={false}
                                showSectionTitles={false}
                                onEmojiSelected={
                                    (emoji) => setTextValue(`${textValue} ${emoji}`)
                                }
                            />
                        </View>
                    ) : null
                }

            </Animated.View>
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
                        onPressIn={
                            Keyboard.dismiss
                        }
                    />
                    <TextInput
                        value={textValue}
                        style={styles.textInput}
                        placeholder='Cảm xúc / Hoạt động'
                        autoFocus={false}
                        onFocus={
                            () => {
                                setIsFocus(true);
                                setDisplayContent(false);
                            }
                        }
                        onBlur={
                            () => {
                                setIsFocus(false);
                            }
                        }
                        onChangeText={
                            (text) => setTextValue(text)
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
