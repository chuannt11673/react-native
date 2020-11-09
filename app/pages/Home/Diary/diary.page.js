import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import AvatarComponent from '../../../components/Avatar/avatar.component';
import ImageGridComponent from '../../../components/ImageGrid/image-grid.component';
import { getDiary } from '../../../utils/services/diary.service';
import { styles } from './diary.style';

export default function Diary() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDiary().subscribe(res => {
            setData(res);
        })
    }, []);

    const renderItem = (value) => {
        const item = value.item;
        return (
            <View>
                <AvatarComponent uri={item.avatar} name={item.name} />
                <ImageGridComponent images={item.photos} />
                <View style={styles.content}>
                    <Text>{item.content}</Text>
                </View>
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
