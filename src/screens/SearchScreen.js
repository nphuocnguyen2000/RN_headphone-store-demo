import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import InputSearch from '../components/searchComponents/InputSearch'
import { AntDesign } from '@expo/vector-icons';

export default function SearchScreen() {
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err)
        );
      };
    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.SearchContainer}>
                <View style={[styles.SearchHeader, { overflow: 'hidden', paddingBottom: 5 }]}>
                    <View></View>
                        <InputSearch/>
                    <AntDesign name='qrcode' size={30} color='#494949' style={{padding: 5}}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: 35
    },  
    SearchContainer: {
        flex: 1,
    },
    SearchHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: '#e8eaf6',
        borderBottomWidth: 1
    }
})
