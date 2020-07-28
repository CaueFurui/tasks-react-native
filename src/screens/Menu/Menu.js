import React from 'react'
import { Text, View, ScrollView, Platform } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import styles from './styles'
import { Gravatar } from 'react-native-gravatar'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default props => {

    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        props.navigation.navigate('AuthOrApp')
    }

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
                <TouchableOpacity onPress={logout}>
                    <View style={styles.logoutIcon}>
                        <Icon name='sign-out' size={30} color='#800'/>
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerItems {...props}/>
        </ScrollView>
    )
}

