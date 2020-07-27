import React, { Component } from 'react'
import { 
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity } from 'react-native'
import styles from './styles'
import backgroundImage from '../../../assets/imgs/login.jpg'

export default class Auth extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: true
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <TextInput placeholder='E-mail' value={this.state.email} 
                        style={styles.input} 
                        onChangeText={email => this.setState({ email })}/>
                    <TextInput placeholder='Senha' value={this.state.password} 
                        style={styles.input} 
                        onChangeText={password => this.setState({ password })}/>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}
