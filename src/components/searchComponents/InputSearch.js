import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
export default function InputSearch() {
    return (
        <View style={styles.SearchBar}>
            <Feather name='search' size={22} color='#494949'/>
            <TextInput 
                placeholder='Từ khóa sản phẩm'
                style={styles.InputSearch}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    SearchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ececec',
        padding: 5,
        borderRadius: 10,
    },
    InputSearch: {
        width: 230,
        paddingHorizontal: 5,
        fontSize: 13
    },
})
