import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function CartItemCheckout() {
    return (
        <View style={styles.CartCheckout}>
            <View style={styles.CartCheckoutNote}>
                <FontAwesome name='pencil' size={15} style={{paddingRight: 5}} color= '#212121'/>
                <Text style={{color: '#212121'}}>Ghi chú</Text>
            </View>
            <View style={styles.CartCheckoutSub}>
                <View style={styles.CartCheckoutSubQuantity}>
                    <Text style={{paddingRight: 5, fontWeight: '700', fontSize: 19}}>1</Text>
                    <Text>sản phẩm</Text>
                </View>
                <Text>Tạm tính:</Text>
                <View style={styles.CartCheckoutSubPrice}>
                    <Text style={{paddingRight: 5, fontWeight: '700', fontSize: 19}}>420,000₫</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.CartCheckoutButton}>
                <Text style={styles.CartCheckoutButtonText}>Tiến hành đặt hàng</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    CartCheckout: {
        width: '100%',
        padding: 10,
        shadowColor: '#000',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    CartCheckoutNote: {
        flexDirection: 'row',
        paddingBottom: 10,
        alignItems: 'center',
    },
    CartCheckoutSub: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        borderBottomColor: '#e0e0e0'
    },
    CartCheckoutSubQuantity: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    CartCheckoutButton: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#484848',
        borderRadius: 10,
        marginTop: 5
    },
    CartCheckoutButtonText: {
        color: '#eee',
        fontWeight: '700',
        fontSize: 18
    }
})
