import { StyleSheet } from 'react-native'
import global from '../../global'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: global.fontFamily,
        color: global.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: global.fontFamily,
        color: global.colors.white,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    input: {
        marginTop: 10,
        backgroundColor: global.colors.white
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 20,
        width: '90%'
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    buttonText: {
        fontFamily: global.fontFamily,
        color: global.colors.white,
        fontSize: 20
    }
})

export default styles