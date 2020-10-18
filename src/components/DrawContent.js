import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux'
import * as actions from '../redux/actions/index'
export default function DrawerContent(props) {
    const dispatch = useDispatch()
    async function signOut(){
        // console.log('+++');
        // await AsyncStorage.removeItem('USER_TOKEN')
        //     .then( res => console.log(res))
        //     .catch( err => console.log(err))
        dispatch(actions.actLogout())
        props.navigation.closeDrawer();
    }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Thomas Edis</Title>
                                <Caption style={styles.caption}>@thomas</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Feather 
                                name="home" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                            active={true}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <AntDesign 
                                name="user" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Account"
                            onPress={() => {props.navigation.navigate('Account')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Feather 
                                name="shopping-bag" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Cart"
                            onPress={() => {props.navigation.navigate('Cart')}}
                        />
                        <DrawerItem 
                                icon={({color, size}) => (
                                    <Feather 
                                    name="bell" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Notify"
                                onPress={() => {props.navigation.navigate('Notify')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <AntDesign
                                name="setting" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialCommunityIcons 
                        name="logout" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    
  });