import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Menu from './screens/Menu'
import Auth from './screens/Auth'
import TaskList from './screens/TaskList'
import AuthOrApp from './screens/AuthOrApp'
import global from './global'


const menuConfig = {
    initialRouteName: 'today',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: global.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            fontWeight: 'bold',
            color: '#080'
        }
    }
}

const menuRoutes = {
    today: {
        name: 'Today',
        screen: props => <TaskList title='Hoje' daysAhead={0} {...props}/>,
        navigationOptions: {
            title: 'Hoje'
        }
    },
    tomorrow: {
        name: 'Tomorrow',
        screen: props => <TaskList title='Amanhã' daysAhead={1} {...props}/>,
        navigationOptions: {
            title: 'Amanhã'
        }
    },
    week: {
        name: 'Week',
        screen: props => <TaskList title='Semana' daysAhead={7} {...props}/>,
        navigationOptions: {
            title: 'Semana'
        }
    },
    month: {
        name: 'Month',
        screen: props => <TaskList title='Mês' daysAhead={30} {...props}/>,
        navigationOptions: {
            title: 'Mês'
        }
    },
}

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig)

const mainRoutes = {
    AuthOrApp: {
        name: 'AuthOrApp',
        screen: AuthOrApp
    },
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: menuNavigator
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'AuthOrApp'
})

export default createAppContainer(mainNavigator)
