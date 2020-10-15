import React, {useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Button, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
export default function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onChangeEmail(text) {
        setEmail(text)
    }
    function onChangePass(pass) {
        setPassword(pass)
    }
    function onHanleLogin() {
        console.log('email', email);
        console.log('pass', password)
    }
    
    return (
        <ImageBackground source={{uri: 'https://forum.keyshot.com/index.php?action=dlattach;topic=22523.0;attach=56433;image'}} style={styles.imageBG}>
            <View style={styles.LoginContainer}>
                <Text style={styles.Title}>SIGN-UP</Text>
                <TextInput 
                    placeholder='Email'
                    onChangeText={(text) => onChangeEmail(text)}
                    value={email}
                    style={styles.Input}
                    keyboardType="email-address"
                />
                <TextInput 
                    placeholder='Password'
                    onChangeText={(pass) => onChangePass(pass)}
                    value={password}
                    pass
                    style={styles.Input}
                    secureTextEntry={true}
                />
                <TextInput 
                    placeholder='Password again'
                    onChangeText={(pass) => onChangePass(pass)}
                    value={password}
                    pass
                    style={styles.Input}
                    secureTextEntry={true}
                />
              
                <TouchableOpacity
                    style={styles.Button}
                    onPress={onHanleLogin}
                >
                    <Text style={styles.ButtonText}>SIGN-UP</Text>
                </TouchableOpacity>
                
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    imageBG: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },
    LoginContainer: {
       alignItems: 'center',
    },
    Title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 30,
        padding: 20 
    },
    Input: {
        height: 40,
        width: 300,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#f1f8e9',
        borderRadius: 10,
        marginBottom: 10
    },
    ForgotPass: {
        color: '#999',
        fontSize: 14,
        textAlign: 'right',
        padding: 10
    },  
    Button: {
        backgroundColor: '#1976d2',
        width: 200,
        height: 40,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red'
    },
    ButtonText: {
        fontSize: 16,
        color: '#eee',
        fontWeight: '700'
    },
    LoginSocial: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    TextAccount: {
        fontSize: 14,
        color: '#eee',
        fontWeight: '600'
    },
    AccountFB: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b5998',
        height: 40,
        width: 100,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5
    },
    AccountGG: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d32f2f',
        height: 40,
        width: 100,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5
    },
    SignUp: {
        marginTop: 5,
        flexDirection: 'row',
        padding: 10
    },
    TextSignUp: {
        color: '#eee',
        fontSize: 13
    }
})


