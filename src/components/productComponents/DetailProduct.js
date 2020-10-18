import React, { useEffect, useRef, useState} from 'react'
import { StyleSheet, Text, View, Animated, SafeAreaView, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AntDesign} from '@expo/vector-icons';     
import { useDispatch, useSelector } from 'react-redux'

import * as actions from '../../redux/actions/index'
import ModalAddCart from './ModalAddCart';
export default function DetailProduct({route, navigation}) {

    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch()
    
    const { id } = route.params
    const data = useSelector( (state) => state.products)
    const infoProductById = data.find( (product) => product.id === id)

    const fadeAnim = useRef(new Animated.Value(1)).current;
    useEffect( ()=> {
        Animated.timing(
            fadeAnim, {
                toValue: 0,
                duration: 5000,
                useNativeDriver: true
            }).start()
    })
    function handleAddToCart (){
        dispatch(actions.actAddToCart(infoProductById))
        setModalVisible(true)
    }
    function setVisible(status){
        setModalVisible(status)
    }
    return (
        <SafeAreaView style={styles.Container}>
            <AntDesign 
                name='arrowleft' 
                size={30} 
                color ='#222' 
                style={{position: 'absolute', left: 15, top: 40, zIndex: 20, width:'100%', height: 100}} 
                onPress = { () => navigation.goBack() }
            />
            {
                infoProductById ? (
                <View>
                    <ModalAddCart navigation={navigation} item={infoProductById} modalVisible={modalVisible} setVisible={setVisible} />
                    <Image source={{uri: infoProductById.image }} style={styles.Image} />
                    <View style={styles.ProductSub}>
                        <Text numberOfLines={2} style={styles.Name} >{infoProductById.nameProduct}</Text>
                    
                        <View style={styles.PriceWrap}>
                            <Text style={styles.Price}>{infoProductById.price},000đ</Text>
                            <Text style={styles.oldPrice}>220,300đ</Text>
                        </View>
                    </View>


                    <View style={styles.ButtonWrap}>
                        <TouchableOpacity style={styles.BtnAddToCart} onPress={handleAddToCart}> 
                            <Text style={{color: '#111', fontWeight: '700'}}>Thêm vào giỏ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BtnBuyNow}>
                            <Text style={{color: '#e0e0e0', fontWeight: '700'}} onPress={handleAddToCart}>Mua ngay</Text>
                        </TouchableOpacity>
                    </View>
                   
                </View>
                )
                :
                (
                    <View><Text>Loadingg</Text></View>
                )
            }
            
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Image: {
        height: 450,
        width: '100%'
    },
    ProductSub: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    Name: {
        fontSize: 23,
        fontWeight: '700',
        paddingVertical: 10
    },
    PriceWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Price: {
        fontWeight: '700',
        fontSize: 18
    },
    oldPrice: {
        color: '#999',
        textDecorationLine: 'line-through',
        paddingLeft: 10
    },
    ButtonWrap: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center'
    },
    BtnAddToCart: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        borderColor: '#666',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        width: 170
    },
    BtnBuyNow: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        width: 170
    }

})
