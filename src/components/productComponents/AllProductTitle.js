import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InputSearch from '../searchComponents/InputSearch'
import {AntDesign, FontAwesome } from '@expo/vector-icons';
export default function AllProductTitle(props) {
    function onHandleSearch (text) {
        props.onHandleSearch(text)
    }
    return (
        <View style={styles.AllProductTitle}>
            <AntDesign name='arrowleft' size={25} color='#494949' style={{padding: 10}} onPress={ () => props.navigation.goBack()}/>
            <InputSearch onHandleSearchInput={onHandleSearch} />
            <FontAwesome name='filter' size={25} color='#494949'
             style={{paddingLeft: 10}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    AllProductTitle: {
        marginTop: 35,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',

    }
})
