import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InputSearch from '../searchComponents/InputSearch'
import { FontAwesome } from '@expo/vector-icons';
export default function AllProductTitle() {
    return (
        <View style={styles.AllProductTitle}>
            <InputSearch />
            <FontAwesome name='filter' size={25} color='#494949'
             style={{paddingLeft: 10}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    AllProductTitle: {
        flexDirection: 'row',
        alignItems: 'center',

    }
})
