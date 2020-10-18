import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NumberFormat from 'react-number-format';
export default function CartItemCheckout(props) {
    const {carts} = props
    function priceDiscount(item){
        let price = item.price
        if(item.percentDiscount){
            if(item.priceDiscount !== 0){
                price = item.price * ((100 - item.percentDiscount)/100)
            }
        }   
        return Math.ceil(price);
    }
    function cartTotal() {
        let total = 0
        for( let i =0; i < carts.length; i++){
            total += ( priceDiscount(carts[i]) * carts[i].quantity)
        }
        return total
    }
    return (
        <View style={styles.CartCheckout}>
            <View style={styles.CartCheckoutNote}>
                <FontAwesome name='pencil' size={15} style={{paddingRight: 5}} color= '#212121'/>
                <Text style={{color: '#212121'}}>Ghi chú</Text>
            </View>
            <View style={styles.CartCheckoutSub}>
                <View style={styles.CartCheckoutSubQuantity}>
                    <Text style={{paddingRight: 5, fontWeight: '700', fontSize: 19}}>
                        {carts.length}
                    </Text>
                    <Text>sản phẩm</Text>
                </View>
                <Text>Tạm tính:</Text>
                <View style={styles.CartCheckoutSubPrice}>
                    <NumberFormat 
                        value={cartTotal()} 
                        displayType={'text'} 
                        thousandSeparator={true}
                        renderText={value => <Text style={{paddingRight: 5, fontWeight: '700', fontSize: 19}}>{value},000đ</Text>}
                    />
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
