import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import InputSearch from '../searchComponents/InputSearch';
export default function HomeHeader(props) {
    return (
        <View style={styles.Header}>
            <Feather 
                name='menu' size={24}  
                color='#494949' 
                onPress={() => props.navigation.openDrawer()} 
                style={{paddingLeft: 10, paddingRight: 15, paddingVertical: 5}}
            />
            <InputSearch />
            <View style={styles.Notify}>
                <Feather 
                name='bell' 
                size={24} 
                color='#494949'
                style={{paddingLeft: 10, paddingRight: 15, paddingVertical: 5}}
                onPress={() => props.navigation.navigate('Notify')} 
                />
                <Text style={styles.NotifyNum}>0</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        paddingVertical: 5,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Notify: {
        position: 'relative'
    },
    NotifyNum: {
        position: 'absolute',
        top: 0,
        right: 10,
        padding: 1,
        paddingHorizontal: 5,
        backgroundColor: '#333',
        borderRadius: 10,
        fontSize: 10,
        fontWeight: '700',
        overflow: 'hidden', 
        color: '#eee'
    },

})
