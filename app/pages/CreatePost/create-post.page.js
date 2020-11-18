import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput, StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import { styles } from './create-post.style';
import AvatarComponent from '../../components/Avatar/avatar.component';
import ButtonComponent from '../../components/Button/button.component';
import { Fontisto, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import ImageGridComponent from '../../components/ImageGrid/image-grid.component';
import { BrandColor } from '../../utils/contants/colors.const';
import FunnyChatComponent from '../../components/FunnyChat/funny-chat.component';

export default function CreatePost({ navigation }) {
    const [text, setText] = useState('');
    const [images, setImages] = useState([]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Vẽ bảng tin',
            headerTitleStyle: {
                top: 1,
                fontWeight: '500',
            },
            headerRight: () => (
                <ButtonComponent
                    title='Đăng tin'
                    titleStyle={{
                        color: BrandColor.secondary
                    }}
                />
            ),
        });
    }, [navigation]);

    const selectImageHandler = () => {
    }

    return (
        <>
            {
                Platform.OS === 'ios' ? <StatusBar barStyle='dark-content' /> : <StatusBar barStyle='dark-content' backgroundColor='white' />
            }
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <AvatarComponent
                        uri='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                    />
                    <View>
                        <Text style={styles.name}>Lê Trung Đức</Text>
                        <View style={styles.headerButtons}>
                            <ButtonComponent
                                containerStyle={styles.buttonContainer}
                                buttonStyle={styles.button}
                                titleStyle={styles.buttonTitle}
                                title='Công khai'
                                icon={
                                    <Fontisto name='earth' size={18} color='#8c8c8c' />
                                }
                            />
                            <ButtonComponent
                                containerStyle={styles.buttonContainer}
                                buttonStyle={styles.button}
                                titleStyle={styles.buttonTitle}
                                title='Nhật ký'
                                icon={
                                    <Fontisto name="plus-a" size={16} color="#8c8c8c" />
                                }
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor='#8c8c8c'
                        placeholder='Chia sẻ câu chuyện của bạn..'
                        onChangeText={text => setText(text)}
                        defaultValue={text}
                    />
                </View>
                <View style={styles.tagsContainer}>
                    <ButtonComponent
                        containerStyle={styles.buttonContainer}
                        buttonStyle={[styles.button, styles.addImageButton]}
                        titleStyle={[styles.buttonTitle, styles.addImageTitle]}
                        title='Thêm ảnh'
                        icon={
                            <FontAwesome5 name="file-image" size={17} color="#00b300" />
                        }
                        onPress={selectImageHandler}
                    />
                    <ButtonComponent
                        containerStyle={styles.buttonContainer}
                        buttonStyle={[styles.button, styles.tagButton]}
                        titleStyle={[styles.buttonTitle, styles.tagTitle]}
                        title='Gắn thẻ'
                        icon={
                            <FontAwesome name="tag" size={17} color="#ffa31a" />
                        }
                    />
                </View>
                <ImageGridComponent
                    images={images}
                />

            </ScrollView>
            <FunnyChatComponent />
        </>
    )
}
