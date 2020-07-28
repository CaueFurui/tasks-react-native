import React from 'react'
import { Text, View, ScrollView, Platform } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import styles from './styles'
import { Gravatar } from 'react-native-gravatar'

export default props => {

    const optionsGravatar = {
        email: props.navigation.getParam('email'),
        secure: true
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Tasks</Text>
                <Gravatar style={styles.avatar}
                    options={optionsGravatar}/>
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{props.navigation.getParam('name')}</Text>
                    <Text style={styles.email}>{props.navigation.getParam('email')}</Text>
                </View>
            </View>
            <DrawerItems {...props}/>
        </ScrollView>
    )
}

