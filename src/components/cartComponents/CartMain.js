import React from 'react'
import { StyleSheet, View, ScrollView} from 'react-native'
import CartItem from './CartItem'
import CartCheckout from './CartCheckout'
import { useSelector } from 'react-redux'
export default function CartMain() {
    const carts = useSelector( state => state.carts)
    console.log(carts);
    return (
        <View style={styles.Container}>
            <ScrollView>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </ScrollView>
            <CartCheckout/>   
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
})
