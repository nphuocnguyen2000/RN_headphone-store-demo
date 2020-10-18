import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image} from 'react-native'
import CartItem from './CartItem'
import CartCheckout from './CartCheckout'
import { useSelector } from 'react-redux'
export default function CartMain() {
    const carts = useSelector( state => state.carts)
    
    return (
        <View style={styles.Container}>
            <ScrollView>
                {
                    carts.length === 0 ?
                    <View style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={{uri: 'https://www.dhaiv.com/images/empty-cart.png'}} style={{height: 200, width: 200}} />
                        <Text style={{color: '#999'}}>Chưa có sản phẩm nào</Text>
                    </View>
                    :
                    carts.map((cart) => {
                        return(
                            <CartItem cart={cart} key ={cart.id}/>
                        )
                    })
                }
            </ScrollView>
            <CartCheckout carts={carts}/>   
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
