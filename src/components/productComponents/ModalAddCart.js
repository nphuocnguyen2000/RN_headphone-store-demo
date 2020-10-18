import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { AntDesign } from '@expo/vector-icons'
export default function ModalAddCart(props) {
    const {navigation, item, modalVisible, setVisible} = props
    return (
        <Dialog
            visible={modalVisible}
        >
            <DialogContent style={{padding: 20, justifyContent: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>Thêm sản phẩm thành công</Text>
                <View style={{flexDirection: 'row', marginVertical: 20, alignItems: 'center'}}>
                    <Image source={{uri: item.image}} style={{height: 50, width: 50}} />
                    <View style={{padding: 5}}>
                        <Text numberOfLines={1} style={{fontWeight: '700', fontSize: 15}}>{item.nameProduct}</Text>
                        <Text style={{fontWeight: '800', fontSize: 15}}>{item.price},000đ</Text>
                    </View>
                </View>
                <TouchableOpacity 
                    style={{padding: 10, alignItems:'center', justifyContent: 'center', backgroundColor: '#333', borderRadius: 10}}
                    onPress= { () => {
                        setVisible(false)
                    }}
                >
                    <Text style={{fontWeight: '700', color: '#fff' }}>Tiếp tục mua hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{marginTop: 5, padding: 10, alignItems:'center', justifyContent: 'center'}}
                    onPress= { () =>{ 
                        setVisible(false)
                        navigation.navigate('Cart')
                    }}
                >
                    <Text style={{fontWeight: '700', textDecorationLine: 'underline'}}>Thành toán ngay <AntDesign name='arrowright' size={15}/></Text>
                </TouchableOpacity>
            </DialogContent>
        </Dialog>
    )
}

const styles = StyleSheet.create({})
