import React, { Component } from 'react'
import { 
    View,
    Modal,
    TouchableWithoutFeedback,
    Text,
    TouchableOpacity,
    TextInput
    } from 'react-native'
import styles from './styles'

const initialState = { desc: '' }

export default class AddTask extends Component {

    state = {
        ...initialState
    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'>
                <TouchableWithoutFeedback
                onPress={this.props.onCancel}>
                    <View style={styles.overlay}>
                    
                    </View>
                </TouchableWithoutFeedback>
                <View style = {styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput style={styles.input} 
                    placeholder='Informe a descrição'
                    value={this.state.desc}
                    onChangeText={(desc) => this.setState({ desc })}/>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback
                onPress={this.props.onCancel}>
                    <View style={styles.overlay}>
            
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}
