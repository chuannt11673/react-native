import React, { useEffect, useState, useRef } from 'react';
import { View, Keyboard, SafeAreaView, Animated, TextInput } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import ButtonComponent from '../Button/button.component';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import { styles } from './funny-chat.style';
import { Button } from 'react-native-elements';

export default function WthChatComponent() {
    const [textValue, setTextValue] = useState('');
    const [height, setKeyboardHeight] = useState(336);

    const animatedHeight = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        _chatToggle();

        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        }
    }, [height]);

    const _keyboardDidShow = (event) => {
        setKeyboardHeight(event.endCoordinates.height);
    }

    const _keyboardDidHide = (event) => {
        setKeyboardHeight(0);
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
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Button
                        buttonStyle={{ backgroundColor: 'white' }}
                        icon={
                            <AntDesign name="user" size={23} style={styles.emojiIcon} />
                        }
                        onPress={
                            () => setKeyboardHeight(0)
                        }
                    />
                    <TextInput
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
                    { id: 1 }
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
                            onEmojiSelected={
                                (emoji) => setTextValue(`${textValue} ${emoji}`)
                            }
                        />
                    )
                }
            />
                
        </SafeAreaView>
    )
}
