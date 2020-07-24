import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import global from '../global'
import moment from 'moment'
import 'moment/locale/pt-br'

export default props => {
    const doneOrNotStyle = props.doneAt != null ? 
        {  textDecorationLine: 'line-through' } : {}

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                <TouchableWithoutFeedback
                onPress={() => {props.toggleTask(props.id)}}>
                    { getCheckView(props.doneAt) }
                </TouchableWithoutFeedback>
            </View>
            <View>
                <Text style={[styles.desc, doneOrNotStyle]}> { props.desc } </Text>
                <Text style={styles.date}> { formattedDate } </Text>
            </View>
        </View>
    )
}

function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View style={styles.done}>
                <Icon name='check' size={20} color={global.colors.white}></Icon>
            </View>
        )
    } else {
        return (
            <View style={styles.pending}></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: global.colors.grey,
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: global.colors.darkerGrey
    },
    done: {
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        backgroundColor: global.colors.green
    },
    desc: {
        fontFamily: global.fontFamily,
        color: global.colors.mainText,
        fontSize: 15
    },
    date: {
        fontFamily: global.fontFamily,
        color: global.colors.subText,
        fontSize: 12
    }
})
