import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function NotifyMain() {
    return (
        <View style={styles.Container}>
            <Text>NOTIFY</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
