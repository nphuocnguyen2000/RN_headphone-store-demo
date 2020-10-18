import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, ScrollView, SafeAreaView, RefreshControl} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import AllProductTitle from './AllProductTitle';
export default function AllProducts({navigation, route}) {
    const {name} = route.params
    const [refreshing, setRefreshing] = useState(false)
    const [search, setSearch] = useState('')
    const data = useSelector( (state) => state.products)
    const dataFilter = data.filter( (product) => product.category ===  name.toLowerCase())
    function priceDiscount(item){
        let price = item.price
        if(item.percentDiscount){
            if(item.priceDiscount !== 0){
                price = item.price * ((100 - item.percentDiscount)/100)
            }
        }   
        return Math.ceil(price);
    }
    function onHandleSearch(text) {
        setSearch(text);
    }
    let dataSearch = dataFilter.filter(function(product) {
        return product.nameProduct.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dataSearch = dataFilter.filter(function(product) {
            return product.nameProduct.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
        setRefreshing(false);
    }, []);  
    return (
        <SafeAreaView style={styles.Container}>
            <AllProductTitle navigation={navigation} onHandleSearch={onHandleSearch}/>
            <View style={styles.AllProductsTitle}>
                <Text style={styles.AllProductsTitleText}>{name}</Text>
                <AntDesign name='appstore1' size={20} style={{paddingHorizontal: 15}}/>
            </View>
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={styles.IntroProductWrap}>
                    {
                        dataSearch.length === 0 ? 
                        (
                            <ActivityIndicator size="large" color="black" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: 500 }}/>
                        )
                        :
                        (
                            dataSearch.map( (product) => {
                                return (
                                    <TouchableOpacity 
                                        style={styles.IntroProductItem} 
                                        key={product.id}
                                        onPress={ () => {navigation.navigate('DetailProduct',{ id: product.id, navigation: navigation })}}
                                    >
                                        <View style={styles.IntroProductItemIntro}>
                                            <Image 
                                                source={{uri: product.image}}
                                                style={styles.IntroImg}
                                            />
                                            <Text numberOfLines={2} style={styles.IntroName}>{product.nameProduct}</Text>
                                            <View style={styles.IntroPriceWrap}>
                                                <Text style={styles.IntroPriceOld}>{product.price},000 đ</Text>
                                                <Text style={styles.IntroPrice}>{priceDiscount(product)},000đ</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    AllProductsTitle: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0'
    },
    AllProductsTitleText: {
        fontSize: 18,
        fontWeight: '700',
        padding: 10,
        paddingVertical: 5,
    },
    IntroProductWrap: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
       
    },
    IntroProductItem: {
        width: '50%',
        padding: 3,
        backgroundColor: '#eee',
        marginBottom: 5,
        overflow: 'hidden',
        height: 290,
    },
    IntroProductItemIntro: {
        flex: 1,
        padding: 5,
        backgroundColor: '#e0e0e0',
    },
    IntroImg: {
        height: 200,
        width: '100%',
    },
    IntroName:{
        paddingTop: 5,
        fontSize: 15,
        fontWeight: '700',
    },
    IntroPriceWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
    },
    IntroPriceOld: {
        color: '#999',
        textDecorationLine: 'line-through'
    },
    IntroPrice: {
        marginLeft:10,
        fontWeight: '700'
    }
})
