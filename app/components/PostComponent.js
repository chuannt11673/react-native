import React from 'react'
import { View, StyleSheet } from 'react-native'
import ActionButtonsComponent from '../components/ActionButtonsComponent'

import AvatarComponent from '../components/AvatarComponent'
import ImagesGridComponent from '../components/ImagesGridComponent'
import MaxLengthTextComponent from '../components/MaxLengthTextComponent'

import colors from '../config/color'

export default function PostComponent(props) {
    const renderAvatar = () => {
        if (!props.avatar) {
            return null;
        }

        return (
            <AvatarComponent
                avatar={props.avatar}
                name={props.name}
                message={props.message}
            />
        );
    }
    return (
        <View key={props.id} style={styles.container}>
            {
                renderAvatar()
            }
            <ImagesGridComponent
                images={[
                    'https://images.unsplash.com/photo-1510832198440-a52376950479?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                ]}
            />
            <MaxLengthTextComponent
                text='Sự thật là… Chúng ta trốn vì muốn được tìm thấy. Chúng ta bỏ đi vì muốn biết ai sẽ theo mình. Chúng ta khóc để xem ai sẽ lau đi giọt lệ. Và chúng ta để trái tim tan vỡ, muốn thấy ai sẽ đến và chữa lành trái tim ta.'
            />
            <ActionButtonsComponent
                displayHeart='true'
                displayComment='true'
                displayShare='true'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: colors.grey,
        borderBottomWidth: 1
    }
})


