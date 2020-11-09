import React from 'react';
import { Text, View, Image } from 'react-native';
import { itemStyles } from './avatar.style';

export default function AvatarComponent({ uri, name, content }) {
    return (
        <View style={itemStyles.item}>
            <Image source={{ uri: uri }} style={itemStyles.avatar} />
            <View>
                <Text style={itemStyles.name}>
                    {name}
                </Text>
                {
                    content ? (
                        <Text numberOfLines={1} style={itemStyles.message}>
                            {content}
                        </Text>
                    ) : null
                }

            </View>
        </View>
    )
}
