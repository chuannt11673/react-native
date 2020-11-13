import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import { getMessages } from '../../../utils/services/message.service';
import { styles, itemStyles } from './message.style';
import Moment from 'moment';

export default function Message({ navigation }) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        getMessages(1).subscribe(res => {
            setData(res);
        })
    }, []);

    const renderItem = (value) => {
        const item = value.item;
        return (
            <View style={itemStyles.item}>
                <Image source={{ uri: item.avatar }} style={itemStyles.avatar} />
                <Text style={itemStyles.name}>
                    {item.name}
                </Text>
                <Text numberOfLines={1} style={itemStyles.message}>
                    {item.message}
                </Text>
                <Text style={itemStyles.time}>
                    {
                        Moment(item.time).format('MMM Do YY')
                    }
                </Text>
                <View style={itemStyles.badge}>
                    <Text style={itemStyles.text}>2</Text>
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
