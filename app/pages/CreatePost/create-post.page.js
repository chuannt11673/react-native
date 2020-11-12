import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput } from 'react-native';
import { styles } from './create-post.style';
import AvatarComponent from '../../components/Avatar/avatar.component';
import ButtonComponent from '../../components/Button/button.component';
import { Fontisto, Ionicons } from '@expo/vector-icons';

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
                            title='Công khai'
                            icon={
                                <Fontisto name='earth' size={18} color='#8c8c8c' />
                            }
                        />
                        <ButtonComponent
                            containerStyle={styles.buttonContainer}
                            buttonStyle={styles.button}
                            title='Nhật ký'
                            icon={
                                <Ionicons name="ios-add" size={20} color="#8c8c8c" />
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
        </ScrollView>
    )
}
