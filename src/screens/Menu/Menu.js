import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import styles from './styles'

export default props => {
    return (
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    )
}

