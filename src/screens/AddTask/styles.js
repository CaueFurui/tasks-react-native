import { StyleSheet } from 'react-native'
import global from '../../global'

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.70)'
    },
    container: {
        backgroundColor: global.colors.white
    },
    header: {
        fontFamily: global.fontFamily,
        backgroundColor: global.colors.today,
        color: global.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 20
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    input: {
        fontFamily: global.fontFamily,
        height: 40,
        margin: 15,
        backgroundColor: global.colors.white,
        borderWidth: 1,
        borderColor: global.colors.lighterGrey,
        borderRadius: 6
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: global.colors.today
    },
    date: {
        fontFamily: global.fontFamily,
        fontSize: 20,
        marginLeft: 15
    }
})

export default styles