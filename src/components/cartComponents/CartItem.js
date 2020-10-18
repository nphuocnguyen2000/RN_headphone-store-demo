import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions/index'
export default function CartItem(props) {
    const dispatch = useDispatch()
    const {cart} = props
    function updateQuantityCart(cart, quantity){
        if(quantity >0){
            dispatch(actions.actUpdateQuantityCart(cart, quantity))
        }
        else{
            dispatch(actions.actDeleteCart(cart))
        }
    }
    function priceDiscount(item){
        let price = item.price
        if(item.percentDiscount){
            if(item.priceDiscount !== 0){
                price = item.price * ((100 - item.percentDiscount)/100)
            }
        }   
        return Math.ceil(price);
    }
    return (
        <View style={styles.CartItem}>
            <View style={styles.CartItemSub}>
                <Image 
                    source={{uri: cart.image}}
                    style={styles.CartItemSubImg}
                />
                <View style={styles.CartItemSubInfo}>
                    <Text  numberOfLines={2} style={{paddingBottom: 2, fontSize: 15, fontWeight: '600'}}>{cart.nameProduct}</Text>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>{priceDiscount(cart)},000đ</Text>
                </View>
            </View>
            <View style={styles.CartItemQuantity}>
                <TouchableOpacity style={styles.CartItemQuantityBtn}
                    onPress={()=> updateQuantityCart(cart, cart.quantity - 1)}
                >
                    <AntDesign name='minus' size={14} color='#eee' />
                </TouchableOpacity>
                <Text style={styles.CartItemQuantityNum}>
                    {cart.quantity}
                </Text>
                <TouchableOpacity style={styles.CartItemQuantityBtn}
                    onPress={()=> updateQuantityCart(cart, cart.quantity + 1)}
                >
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
