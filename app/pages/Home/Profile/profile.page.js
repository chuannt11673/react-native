import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styles } from './profile.style';
import * as profileService from '../../../utils/services/profile.service';
import ImageComponent from '../../../components/Image/image.component';
import { BrandColor } from '../../../utils/contants/colors.const';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

export default function Profile() {
    const [data, setData] = useState();
    useEffect(() => {
        profileService.getProfile(null).subscribe(res => {
            setData(res);
        });
    }, []);

    const renderData = () => {
        return (
            <>
                <ImageComponent uri={data.avatar} containerStyle={styles.avatarStyle} />
                <View style={styles.reorderArea}>
                    <View style={styles.reorderTouchMove}>
                        <FontAwesome name='reorder' size={21} color={BrandColor.black} />
                    </View>
                </View>
                <View style={styles.titleArea}>
                    <View>
                        <Text style={styles.titleName}>{data.name}</Text>
                        <Text style={styles.titleInfo}>{data.gender}, {data.age} tuổi</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <SimpleLineIcons name="heart" size={21} color={BrandColor.secondary} />
                        <Text>{data.follows} theo dõi</Text>
                    </View>
                </View>
                <View style={styles.contentArea}>
                    <Text style={styles.contentText}>
                        {data.message}
                    </Text>
                </View>
                <View style={styles.moreInfoView}>
                    <Text style={styles.moreInfoText}>Đang ở {data.address}</Text>
                    <Text style={styles.moreInfoText}>Làm việc tại {data.workAddress}</Text>
                    <Text style={styles.moreInfoText}>Từng học tại {data.college}</Text>
                    <View style={styles.moreInfoButtonView}>
                        {
                            data.hobbies.map((item, index) => {
                                return <Button key={index} title={item}
                                    titleStyle={styles.moreInfoButtonTitle}
                                    buttonStyle={styles.moreInfoButton}
                                    containerStyle={styles.moreInfoButtonContainer}
                                />
                            })
                        }
                    </View>
                </View>
                {
                    data.photos.map((item, index) => <ImageComponent key={index} uri={item} />)
                }
            </>
        )
    }

    return (
        <ScrollView style={styles.container}>
            {
                data ? renderData() : null
            }
        </ScrollView>
    )
}
