import React, { Component } from 'react'
import { 
  Text, 
  View, 
  ImageBackground, 
  FlatList, 
  TouchableOpacity,
  Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import todayImage from '../../../assets/imgs/today.jpg'
import styles from './styles'
import moment from 'moment'
import 'moment/locale/pt-br'
import Task from '../../components/Task'
import global from '../../global'

export default class TaskList extends Component {

  state = {
    showDoneTasks: true,
    tasks: [
    {
      id: Math.random(),
      desc: 'Comprar Maçã',
      estimateAt: new Date(),
      doneAt: new Date()
    }, 
    {
      id: Math.random(),
      desc: 'Comprar Banana',
      estimateAt: new Date(),
    },
  ]
  }

  toggleFilter = () => {
    this.setState({ showDoneTasks: !this.state.showDoneTasks })
  }

  toggleTask = taskId => {
    const tasks = [...this.state.tasks]
    tasks.forEach(task => {
      if(task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date()
      }
    })

    this.setState({ tasks })
  }

  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon name={ this.state.showDoneTasks ? 'eye' : 'eye-slash' } 
              size={20} color={global.colors.secondary}/>
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <FlatList data={this.state.tasks}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask} /> } />
        </View>
      </View>
    )
  }
}
