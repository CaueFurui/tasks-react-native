import { StyleSheet } from 'react-native'
import global from '../../global'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: global.fontFamily,
        fontSize: 50,
        color: global.colors.secondary,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        fontFamily: global.fontFamily,
        color: global.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    }
})

export default styles