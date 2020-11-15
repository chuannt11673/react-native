import React, { useEffect, useState } from 'react';
import { View, StatusBar, Platform, ScrollView, Image, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import WthChatComponent from '../../components/WthChat/wth-chat.component';
import { getChats } from '../../utils/services/chat.service';
import { styles } from './chat.style';

export default function Chat({ route }) {
    const [data, setData] = useState([]);
    let friend;
    useEffect(() => {
        friend = route.params.item;
        getChats(null).subscribe(res => {
            const messages = res.map((item, index) => {
                return {
                    ...item,
                    isNew: index === 0 || item.isMyself !== res[index - 1].isMyself,
                    uri: { uri: item.isMyself ? item.uri : friend.avatar }
                }
            });
            setData(messages);
        });
    }, []);
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={
                Platform.OS === 'ios' ? 'padding' : 'height'
            }
            keyboardVerticalOffset={
                Platform.OS === 'ios' ? 90 : 80
            }
        >
            <View
                style={{ flex: 1 }}
            >
                {
                    Platform.OS === 'ios' ? <StatusBar barStyle='dark-content' /> : <StatusBar barStyle='dark-content' backgroundColor='white' />
                }
                <ScrollView
                    style={styles.container}
                >
                    {
                        data.map((item, index) => {
                            return item.isMyself ? (
                                <View key={index} style={[styles.item, { justifyContent: 'flex-end' }, item.isNew ? { marginTop: 5 } : { padding: 5 }]}>
                                    <View style={[styles.message, { marginRight: 10, backgroundColor: '#99ffff' }]}>
                                        <Text style={styles.messageText}>
                                            {item.message}
                                        </Text>
                                    </View>
                                    <Image
                                        style={[styles.avatar]}
                                        source={item.isNew ? item.uri : null}
                                    />
                                </View>
                            ) : (
                                    <View key={index} style={[styles.item, item.isNew ? { marginTop: 5 } : { padding: 0 }]}>
                                        <Image
                                            style={[styles.avatar]}
                                            source={item.isNew ? item.uri : null}
                                        />
                                        <View style={[styles.message, { marginLeft: 10, backgroundColor: '#c2d6d6' }]}>
                                            <Text style={styles.messageText}>
                                                {item.message}
                                            </Text>
                                        </View>
                                    </View>
                                )
                        })
                    }
                </ScrollView>
                <WthChatComponent />
            </View>
        </KeyboardAvoidingView>
    )
}
