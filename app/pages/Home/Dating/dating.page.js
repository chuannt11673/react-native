import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { BrandColor } from '../../../utils/contants/colors.const';

export default function Dating() {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor={BrandColor.primary} translucent={true} />
            <View>
                <Text>Dating</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({})
