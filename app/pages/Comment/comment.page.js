import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { Text, View } from 'react-native';
import { getComments } from '../../utils/services/comment.service';
import { styles } from './comment.style';

export default function Comment({ route }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        getComments(null).subscribe(res => {
            setData(res);
        });
    }, []);

    const renderSubItem = (item) => {
        return (
            <View style={[styles.item, styles.subItem]}>
                <Image source={{uri: item.avatar}} style={styles.avatar} />
                <View style={[styles.content, styles.subContent]}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text>{item.message}</Text>
                </View>
            </View>
        )
    }

    const renderItem = (value) => {
        const item = value.item;
        return (
            <View style={styles.item}>
                <Image source={{uri: item.avatar}} style={styles.avatar} />
                <View style={styles.content}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text>{item.message}</Text>
                </View>
                {
                    item.comments.map(item => renderSubItem(item))
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}
