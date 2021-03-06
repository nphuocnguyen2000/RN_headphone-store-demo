import React, {useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Button, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions/index'
import axios from 'axios'
export default function Login({ navigation }) {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function onChangeEmail(text) {
        setEmail(text)
    }
    function onChangePass(pass) {
        setPassword(pass)
    }
    async function onHanleLogin() {
        
        await axios.post('https://api-rn-headphone-demo.herokuapp.com/account/login', {email, password})
            .then((response) => {
                if(response.data.errors){
                    console.log(response.data.message);
                }
                else{
                    dispatch(actions.actLogin(response.data))
                }
            })
            // `.then((response) => {
            //     AsyncStorage.setItem('USER_TOKEN', JSON.stringify(response.data.token))
            // })`
            .catch((error) => { //your callback if axios fails
                console.log(error);
            });
    }
    return (
        <ImageBackground source={{uri: 'https://forum.keyshot.com/index.php?action=dlattach;topic=22523.0;attach=56433;image'}} style={styles.imageBG}>
            <View style={styles.LoginContainer}>
                <Text style={styles.Title}>LOGIN</Text>
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
                <Text style={styles.ForgotPass}>
                    Forgot Password?
                </Text>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={onHanleLogin}
                >
                    <Text style={styles.ButtonText}>LOG IN</Text>
                </TouchableOpacity>
                <Text style={styles.ForgotPass}>Or connect using</Text>
                <View style={styles.LoginSocial}>
                    <View style={styles.AccountFB}>
                        <FontAwesome name='facebook' color='#eee' size={18} style={{paddingRight: 5}}/>
                        <Text style={styles.TextAccount}>Facebook</Text>
                    </View>
                    <View style={styles.AccountGG}>
                        <AntDesign name='google' color='#eee' size={18} style={{paddingRight: 5}} />
                        <Text style={styles.TextAccount}>Google</Text>
                    </View>
                </View>
                <View style={styles.SignUp}>
                    <Text style={styles.TextSignUp}>Don't have an account </Text>
                    <Text 
                        style={[styles.TextSignUp, {color:'#58a5f0'}]}
                        onPress={() => navigation.navigate('SignUp')}
                    >Sign Up</Text>
                </View>
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


