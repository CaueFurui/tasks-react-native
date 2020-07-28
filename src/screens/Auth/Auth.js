import React, { Component } from 'react'
import { 
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Alert } from 'react-native'
import styles from './styles'
import backgroundImage from '../../../assets/imgs/login.jpg'
import AuthInput from '../../components/AuthInput'

export default class Auth extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: false
    }

    signInOrSignUp = () => {
        if(this.state.stageNew) {
            Alert.alert('Sucesso!', 'Criar a conta')
        } else {
            Alert.alert('Sucesso!', 'Logar')
        }
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Crie sua conta' : 'Informe seus dados'}
                    </Text>
                    {this.state.stageNew && 
                        <AuthInput icon='user' placeholder='Nome' 
                        value={this.state.name} 
                        style={styles.input} 
                        onChangeText={name => this.setState({ name })}/>
                    }
                    <AuthInput icon='at' placeholder='E-mail' 
                        value={this.state.email} 
                        style={styles.input} 
                        onChangeText={email => this.setState({ email })}/>
                    <AuthInput icon='lock' placeholder='Senha' 
                        value={this.state.password} 
                        style={styles.input} 
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}/>
                    {this.state.stageNew && 
                        <AuthInput icon='asterisk' placeholder='Confirme a sua senha' 
                        value={this.state.confirmPassword} 
                        secureTextEntry={true}
                        style={styles.input} 
                        onChangeText={confirmPassword => this.setState({ confirmPassword })}/>
                    }
                    <TouchableOpacity onPress={this.signInOrSignUp}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 10 }} 
                    onPress={ () => this.setState({ stageNew: !this.state.stageNew })}>
                    <Text style={styles.buttonText}>
                        {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                    </Text>

                </TouchableOpacity>
            </ImageBackground>
        )
    }
}
