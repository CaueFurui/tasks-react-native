import React from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    TouchableWithoutFeedback,
    TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome'
import global from '../global'
import moment from 'moment'
import 'moment/locale/pt-br'

export default props => {
    const doneOrNotStyle = props.doneAt != null ? 
        {  textDecorationLine: 'line-through' } : {}

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')

    const getRightContent = () => {
        return (
            <TouchableOpacity style={styles.right} 
                onPress={() => props.onDelete && props.onDelete(props.id)}>
                <Icon name='trash' size={30} color='#fff' />
            </TouchableOpacity>
        )
    }

    const getLeftContent = () => {
        return (
            <View style={styles.left}>
                <Icon name='trash' size={20} color='#fff' style={styles.excludeIcon} />
                <Text style={styles.excludeText}>Excluir</Text>
            </View>
        )
    }

    return (
        <Swipeable renderRightActions={getRightContent} 
            renderLeftActions={getLeftContent}
            onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)}>
            <View style={styles.container}>
                <View style={styles.checkContainer}>
                    <TouchableWithoutFeedback
                    onPress={() => {props.onToggleTask(props.id)}}>
                        { getCheckView(props.doneAt) }
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <Text style={[styles.desc, doneOrNotStyle]}> { props.desc } </Text>
                    <Text style={styles.date}> { formattedDate } </Text>
                </View>
            </View>
        </Swipeable>
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
        paddingVertical: 10,
        backgroundColor: global.colors.white
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
    },
    right: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    left: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center'
    },
    excludeText: {
        fontFamily: global.fontFamily,
        color: global.colors.white,
        fontSize: 20,
        margin: 10
    },
    excludeIcon: {
        marginLeft: 10
    }
})
