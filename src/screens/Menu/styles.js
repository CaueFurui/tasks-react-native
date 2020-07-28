import { StyleSheet, Platform } from 'react-native'
import global from '../../global'

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        margin: 10,
        backgroundColor: '#222',
    },
    title: {
        color: '#000',
        fontFamily: global.fontFamily,
        fontSize: 30,
        padding: 10,
        marginTop: Platform.OS === 'ios' ? 70 : 30
    },
    userInfo: {
        marginLeft: 10
    },
    name: {
        fontFamily: global.fontFamily,
        fontSize: 20,
        marginBottom: 5,
        color: global.colors.mainText
    },
    email: {
        fontFamily: global.fontFamily,
        fontSize: 15,
        color: global.colors.subText,
        marginBottom: 10
    }
})

export default styles
