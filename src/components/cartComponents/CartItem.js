import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function CartItem() {
    return (
        <View style={styles.CartItem}>
            <View style={styles.CartItemSub}>
                <Image 
                    source={{uri: 'https://i5.walmartimages.com/asr/202ab4fe-c67f-4ca2-a1f4-7a5a0be2ab18_1.f277eb7613e84ccb437ec98c3a12e981.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'}}
                    style={styles.CartItemSubImg}
                />
                <View style={styles.CartItemSubInfo}>
                    <Text  numberOfLines={2} style={{paddingBottom: 2, fontSize: 15, fontWeight: '600'}}>Sony MDR-7506 Head Profes sional </Text>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>340,000 đ</Text>
                </View>
            </View>
            <View style={styles.CartItemQuantity}>
                <TouchableOpacity style={styles.CartItemQuantityBtn}>
                    <AntDesign name='minus' size={14} color='#eee' />
                </TouchableOpacity>
                <Text style={styles.CartItemQuantityNum}>1</Text>
                <TouchableOpacity style={styles.CartItemQuantityBtn}>
                    <AntDesign name='plus' size={14} color='#eee'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        backgroundColor: '#eee'
    },
    CartItemSub: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        width: '70%',
        overflow: 'hidden',
    },
    CartItemSubImg: {
        height: 70,
        width: 70
    },
    CartItemQuantity: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        flexDirection: 'row',
    },
    CartItemSubInfo: {
        flex: 1,
        paddingHorizontal: 5,
    },
    CartItemQuantityBtn: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: '#484848',
        borderRadius: 50,
    },
    CartItemQuantityNum: {
        paddingHorizontal: 10,
        fontWeight: '700'
    },
})
