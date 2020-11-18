import React, { useEffect, useState, useRef } from 'react';
import { View, Keyboard, Animated, TextInput } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import ButtonComponent from '../Button/button.component';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import { styles } from './funny-chat.style';
import { Button } from 'react-native-elements';

export default function FunnyChatComponent() {
    const [textValue, setTextValue] = useState('');
    const [initialHeight, setInitialHeight] = useState(0);
    const [height, setKeyboardHeight] = useState(0);
    const [isKeyboardShown, setKeyboardShown] = useState(false);
    const inputRef = React.createRef();

    const animatedHeight = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
        _chatToggle();
        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        }
    }, [height]);

    const _keyboardDidShow = (event) => {
        if (initialHeight === 0)
            setInitialHeight(event.endCoordinates.height);
        setKeyboardHeight(event.endCoordinates.height);
        setKeyboardShown(true);
    }

    const _keyboardDidHide = () => {
        setKeyboardShown(false);
    }

    const _chatToggle = () => {
        Animated.timing(
            animatedHeight,
            {
                toValue: height,
                duration: 200,
                useNativeDriver: false
            }
        ).start();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Button
                        buttonStyle={{ backgroundColor: 'white' }}
                        icon={
                            <AntDesign name="user" size={23} style={styles.emojiIcon} />
                        }
                        onPress={
                            () => {
                                if (height > 0) {
                                    if (isKeyboardShown) {
                                        Keyboard.dismiss();
                                        return;
                                    }

                                    setKeyboardHeight(0);
                                } else {
                                    setKeyboardHeight(initialHeight);
                                }
                            }
                        }
                    />
                    <TextInput
                        ref={inputRef}
                        value={textValue}
                        style={styles.textInput}
                        placeholder='Cảm xúc / Hoạt động'
                        autoFocus={true}
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
            <Animated.FlatList
                style={{
                    height: animatedHeight,
                }}
                data={[
                    { id: '1' }
                ]}
                keyExtractor={
                    item => item.id
                }
                renderItem={
                    ({ }) => (
                        <EmojiSelector
                            category={Categories.emotion}
                            showSearchBar={false}
                            showSectionTitles={false}
                            showTabs={false}
                            onEmojiSelected={
                                (emoji) => setTextValue(`${textValue}${emoji}`)
                            }
                        />
                    )
                }
            />
        </View>
    )
}
