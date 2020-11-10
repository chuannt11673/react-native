import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import AvatarComponent from '../../../components/Avatar/avatar.component';
import ButtonComponent from '../../../components/Button/button.component';
import ImageGridComponent from '../../../components/ImageGrid/image-grid.component';
import TruncatedTextComponent from '../../../components/TruncatedText/truncated-text.component';
import { getDiary } from '../../../utils/services/diary.service';
import { styles } from './diary.style';
import { SimpleLineIcons } from '@expo/vector-icons';
import { BrandColor } from '../../../utils/contants/colors.const';

export default function Diary({ navigation }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDiary().subscribe(res => {
            setData(res);
        })
    }, []);

    const renderItem = (value) => {
        const item = value.item;
        return (
            <View style={styles.item}>
                <AvatarComponent uri={item.avatar} name={item.name} />
                <ImageGridComponent images={item.photos} />
                <View style={styles.content}>
                    <TruncatedTextComponent text={item.content} />
                </View>
                <View style={styles.action}>
                    <ButtonComponent
                        title={'12'}
                        icon={
                            <SimpleLineIcons name="heart" size={21} color={BrandColor.secondary} />
                        }
                    />
                    <ButtonComponent
                        title={'3'}
                        icon={
                            <SimpleLineIcons name="bubbles" size={21} color={BrandColor.black} />
                        }
                        onPress={
                            () => navigation.navigate('Comment', { item: item })
                        }
                    />
                    <ButtonComponent
                        title={'5'}
                        icon={
                            <SimpleLineIcons name="cursor" size={21} color={BrandColor.black} />
                        }
                    />
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
