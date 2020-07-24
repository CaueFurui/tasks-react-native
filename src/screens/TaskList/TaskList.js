import React, { Component } from 'react'
import { 
  Text, 
  View, 
  ImageBackground, 
  FlatList, 
  TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import todayImage from '../../../assets/imgs/today.jpg'
import styles from './styles'
import moment from 'moment'
import 'moment/locale/pt-br'
import Task from '../../components/Task'
import global from '../../global'
import AddTask from '../AddTask'

export default class TaskList extends Component {

  state = {
    showDoneTasks: true,
    showModal: false,
    visibleTasks: [],
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

  componentDidMount = () => {
    this.filterTasks()
  }

  toggleFilter = () => {
    this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)

  }

  filterTasks = () => {
    let visibleTasks = null
    if(this.state.showDoneTasks) {
        visibleTasks = [...this.state.tasks]
    } else {
        const pending = task => task.doneAt === null
        visibleTasks = this.state.tasks.filter(pending)
    }

    this.setState({ visibleTasks })
}

  toggleTask = taskId => {
    const tasks = [...this.state.tasks]
    tasks.forEach(task => {
        if(task.id === taskId) {
            task.doneAt = task.doneAt ? null : new Date()
        }
    })

    this.setState({ tasks }, this.filterTasks)
}

  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')
    return (
      <View style={styles.container}>
        <AddTask isVisible={this.state.showModal}
          onCancel={() => this.setState({ showModal: false })}/>
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
          <FlatList data={this.state.visibleTasks}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask} /> } />
        </View>
        <TouchableOpacity style={styles.addButton} 
          onPress={() => this.setState({ showModal: true})} 
          activeOpacity={0.7}>
          <Icon name='plus' size={20} 
            color={global.colors.secondary} />
        </TouchableOpacity>
      </View>
    )
  }
}
