import React from 'react'
import { StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,  } from '@react-navigation/stack';
import Login from '../components/authComponents/Login'
import SignUp from '../components/authComponents/SignUp'

const Stack = createStackNavigator();

export default function AuthScreen() {

    return (
        <Stack.Navigator
            initialRouteName='Login'
        >
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{headerShown: false}} 
            />
            <Stack.Screen 
                name="SignUp" 
                component={SignUp} 
                options={{headerShown: false}} 
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    
})
