import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import AvatarComponent from '../../../components/Avatar/avatar.component';
import ButtonComponent from '../../../components/Button/button.component';
import ImageGridComponent from '../../../components/ImageGrid/image-grid.component';
import TruncatedTextComponent from '../../../components/TruncatedText/truncated-text.component';
import { getDiary } from '../../../utils/services/diary.service';
import { styles } from './diary.style';
import { SimpleLineIcons } from '@expo/vector-icons';
import { BrandColor } from '../../../utils/contants/colors.const';
import { FontAwesome } from '@expo/vector-icons';

export default function Diary({ navigation }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDiary().subscribe(res => {
            setData(res);
        })
    }, []);

    const renderItem = (item, index) => {
        return (
            <View key={index} style={styles.item}>
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
        <>
            <StatusBar barStyle='light-content' backgroundColor={BrandColor.primary} translucent={true} />
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={
                        () => {
                            navigation.navigate('CreatePost');
                        }
                    }>
                        <View style={styles.headerAvatar}>
                            <AvatarComponent
                                uri='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                            />
                            <Text style={styles.headerText}>Hôm nay bạn thế nào?</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.headerActions}>
                        <ButtonComponent
                            containerStyle={styles.headerContainer}
                            title='Photo'
                            titleStyle={styles.headerTitleStyle}
                            icon={
                                <FontAwesome name="file-image-o" size={19} color="#00b300" />
                            }
                        />
                        <ButtonComponent
                            containerStyle={styles.headerContainer}
                            title='Video'
                            titleStyle={styles.headerTitleStyle}
                            icon={
                                <FontAwesome name="video-camera" size={19} color="#ff1ac6" />
                            }
                        />
                        <ButtonComponent
                            containerStyle={styles.headerContainer}
                            title='Paint'
                            titleStyle={styles.headerTitleStyle}
                            icon={
                                <FontAwesome name="paint-brush" size={19} color="#ff1ac6" />
                            }
                        />
                    </View>
                </View>
                {
                    data.map((item, index) => renderItem(item, index))
                }
            </ScrollView>
        </>

    )
}
