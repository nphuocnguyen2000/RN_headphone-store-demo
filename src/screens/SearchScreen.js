import React, {useState} from 'react'
import { StyleSheet, View, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native'
import InputSearch from '../components/searchComponents/InputSearch'
import { AntDesign } from '@expo/vector-icons';
import {useSelector} from 'react-redux'
export default function SearchScreen({navigation}) {
    const data = useSelector((state) => state.products)
    const [value, setValue] = useState ('')
    function onHandleSearchInput(text){
        setValue(text);
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
    let dataFilter = data.filter(function(product) {
        return product.nameProduct.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    })  
    const dataFilterSlice = dataFilter.slice(0,4)
    const resultDataFiler = dataFilterSlice.map( (item) => {
        return (
            <TouchableOpacity style={styles.SearchSubItem} key={item.id} onPress={() => { navigation.navigate('DetailProduct', {id: item.id, navigation: navigation})}}>
                <Image 
                source={{uri: item.image}} 
                style={styles.SearchSubItemImg}
                />
                <View style={styles.SearchSubInfo}>
                    <Text style={styles.SearchSubNamePr} numberOfLines={1}>{item.nameProduct}</Text>
                    <View style={styles.SearchSubPrice}>
                        <Text style={styles.Price}>{priceDiscount(item)},000đ</Text>
                        <Text style={styles.oldPrice}>{item.price},000đ</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    })
    return (
        <SafeAreaView style={styles.Container}>
            <View style={[styles.SearchHeader, { overflow: 'hidden', paddingBottom: 5 }]}>
                <View></View>
                    <InputSearch onHandleSearchInput={onHandleSearchInput} focus={true}/>
                <AntDesign name='qrcode' size={30} color='#494949' style={{padding: 5}}/>
            </View>
            <View style={styles.SearchInfoSearch}>
                <View style={styles.SearchSub}>
                    {resultDataFiler}
                </View>
                <TouchableOpacity style={styles.SearchAll}>
                    <Text>Xem tất cả</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: 35
    },  
    SearchContainer: {
        flex: 1,
    },
    SearchHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    SearchSub: {

    },
    SearchSubItem: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomColor: '#e0e0e0',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: '#fff'
    },
    SearchSubItemImg: {
        height: 60,
        width: 60,
        padding: 5,
        overflow: 'hidden',
        borderRadius: 2
    },
    SearchSubInfo: {
        paddingHorizontal: 5,
        flex: 1,
    },
    SearchSubNamePr: {
        fontSize: 17,
        fontWeight: '600',
    },
    SearchSubPrice: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Price :{
        fontSize: 15,
        fontWeight: '700'
    },
    oldPrice :{
        paddingLeft: 10,
        fontSize: 13,
        color: '#999',
        textDecorationLine: 'line-through'
    },
    SearchAll: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderBottomColor: '#e0e0e0',
        borderWidth: 1,
        borderTopColor: '#fff'
    }
})
