import React from 'react'
import { StyleSheet, View, TextInput, ActivityIndicator } from 'react-native'
import { Feather } from '@expo/vector-icons';

export default function InputSearch(props) {
    function onHandleSearch(text){
        props.onHandleSearchInput(text)
    } 
    return (
        <View style={styles.SearchBar}>
            <Feather name='search' size={22} color='#494949'/>
            <TextInput 
                placeholder='Từ khóa sản phẩm'
                style={styles.InputSearch}
                onChangeText={(text) => onHandleSearch(text)}
                autoFocus={props.focus}
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
