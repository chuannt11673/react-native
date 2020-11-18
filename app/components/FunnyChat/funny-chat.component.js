import React, { useEffect, useState, useRef } from 'react';
import { View, Keyboard, Animated, TextInput, Image, FlatList } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import ButtonComponent from '../Button/button.component';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import { styles } from './funny-chat.style';
import { Button } from 'react-native-elements';
import * as MediaLibrary from 'expo-media-library';

const modes = {
    emoji: 1,
    photo: 2,
    video: 3
};

export default function FunnyChatComponent() {
    const [textValue, setTextValue] = useState('');
    const [initialHeight, setInitialHeight] = useState(0);
    const [height, setKeyboardHeight] = useState(0);
    const [isKeyboardShown, setKeyboardShown] = useState(false);
    const [images, setImages] = useState([]);
    const [mode, setMode] = useState(modes.emoji);
    const inputRef = React.createRef();

    const animatedHeight = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        _chatToggle();
    }, [height]);

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
        getImages();

        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        }
    }, []);

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

    const getImages = () => {
        const lastItem = images[images.length - 1];
        const options = {
            after: lastItem ? lastItem.id : null
        };

        MediaLibrary.requestPermissionsAsync().then(
            MediaLibrary.getAssetsAsync(options).then(res => {
                setImages(res.assets);
            })
        );
    }

    const renderEmoji = () => {
        return (
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

    const renderImages = () => {
        return (
            <FlatList
                data={images}
                style={styles.imagesContainer}
                keyExtractor={item => item.id}
                renderItem={
                    item => {
                        return <Image
                            key={item.item.id}
                            style={styles.image}
                            source={{
                                uri: item.item.uri
                            }}
                        />
                    }
                }
            />
        )
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
                                        setMode(modes.emoji);
                                        Keyboard.dismiss();
                                    } else {
                                        if (mode !== modes.emoji) {
                                            setMode(modes.emoji);
                                            return;
                                        }
                                        setKeyboardHeight(0);
                                    }
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
                        onPress={
                            () => setMode(modes.photo)
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
                    ({ }) => {
                        switch(mode) {
                            case modes.emoji:
                                return renderEmoji();
                            case modes.photo:
                                return renderImages();
                            default:
                                return null;
                        }
                    }
                }
            />
        </View>
    )
}
