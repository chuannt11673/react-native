import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import AvatarComponent from '../../components/Avatar/avatar.component';
import ButtonComponent from '../../components/Button/button.component';
import ImageGridComponent from '../../components/ImageGrid/image-grid.component';
import TruncatedTextComponent from '../../components/TruncatedText/truncated-text.component';
import { getComments } from '../../utils/services/comment.service';
import { styles } from './comment.style';
import { SimpleLineIcons } from '@expo/vector-icons';
import * as diaryStyles from '../Home/Diary/diary.style';
import { BrandColor } from '../../utils/contants/colors.const';

function SubItem({ item, index }) {
    return (
        <View key={index} style={[styles.item, styles.subItem]}>
            <Image source={{uri: item.avatar}} style={styles.avatar} />
            <View style={[styles.content, styles.subContent]}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>{item.message}</Text>
            </View>
        </View>
    )
}

function Item({ data, index }) {
    const [item, setItem] = useState(data);
    return (
        <View key={index} style={styles.item}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.content}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>{item.message}</Text>
            </View>
            <View>
                <Text style={styles.time}>3 phút trước</Text>
                <TouchableOpacity onPress={
                    () => {
                        const updatedItem = {
                            ...item,
                            isViewMoreComments: true
                        };
                        setItem(updatedItem);
                    }
                }>
                    <Text style={styles.viewMoreComments}>Xem thêm {item.comments.length} bình luận</Text>
                </TouchableOpacity>
            </View>
            {
                item.isViewMoreComments ? item.comments.map((item, index) => <SubItem key={index} item={item} index={index} />) : null
            }
        </View>
    )
}

export default function Comment({ route }) {
    const [data, setData] = useState([]);
    const item = route.params.item;
    useEffect(() => {
        getComments(null).subscribe(res => {
            const comments = res.map(item => {
                return {
                    ...item,
                    isViewMoreComments: false
                }
            });
            setData(comments);
        });
    }, []);

    const renderPost = () => {
        return (
            <View style={diaryStyles.styles.item}>
                <AvatarComponent uri={item.avatar} name={item.name} />
                <ImageGridComponent images={item.photos} />
                <View style={diaryStyles.styles.content}>
                    <TruncatedTextComponent text={item.content} />
                </View>
                <View style={diaryStyles.styles.action}>
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
        <>
            <StatusBar barStyle='default' />
            <ScrollView style={styles.container}>
                {
                    renderPost()
                }
                <View style={{ paddingBottom: 20 }}>
                    {
                        data.map((item, index) => <Item key={index} data={item} index={index} />)
                    }
                </View>
            </ScrollView>
        </>
    )
}
