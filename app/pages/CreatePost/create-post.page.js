import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput } from 'react-native';
import { styles } from './create-post.style';
import AvatarComponent from '../../components/Avatar/avatar.component';
import ButtonComponent from '../../components/Button/button.component';
import { Fontisto, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import ImageGridComponent from '../../components/ImageGrid/image-grid.component';

export default function CreatePost() {
    const [text, setText] = useState('');
    return (
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
                images={[
                    'https://images.unsplash.com/photo-1564419429381-98dbcf916478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    'https://images.unsplash.com/photo-1570651851409-93d5add773d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                ]}
            />
            
        </ScrollView>
    )
}
