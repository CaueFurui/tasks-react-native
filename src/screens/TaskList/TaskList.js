import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import todayImage from '../../../assets/imgs/today.jpg'
import styles from './styles'
import moment from 'moment'
import 'moment/locale/pt-br'

export default class TaskList extends Component {
  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <Text> lol </Text>
        </View>
      </View>
    )
  }
}
