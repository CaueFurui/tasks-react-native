import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' 
    ? 'http://localhost:3000' : 'http://192.168.0.14:3000'

function showError(err) {
    if(err.response && err.response.data)
    Alert.alert('Opss! Ocorreu um problema!', `Mensagem: ${err.response.data}`)
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess }