import React, {useEffect} from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import {useSelector} from 'react-redux'
export default function HomeIntroProduct(props) {
    const { navigation, name } = props
    const data = useSelector( state => state.products)
    const dataFilter = data.filter( (product) => product.category ===  name.toLowerCase())
    const dataRenderHome = dataFilter.slice(0, 4)
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
        
        <View style={styles.IntroProduct}>
            <View style={styles.IntroProductTitle}>
            <Text style={{color: '#333', fontSize: 18, fontWeight: '700'}}>{name}</Text>
                <Text 
                    style={{color: '#999', paddingVertical: 5}}
                    onPress={() => {navigation.navigate('AllProducts', {name:name})}}
                >
                    Xem tất cả {'>'}
                </Text>
            </View>
            <View style={styles.IntroProductWrap}>
                {
                    !dataRenderHome.length ? 
                    (
                        <ActivityIndicator size="large" color="black" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: 50 }}/>
                    )
                    :
                    (
                        dataRenderHome.map((product) => {
                            return (
                                    <TouchableOpacity style={styles.IntroProductItem} onPress={ () => {navigation.navigate('DetailProduct',{ id: product.id, navigation: navigation })}} key={product.id}>
                                        <View style={styles.IntroProductItemIntro}>
                                            <Image 
                                                source={{uri: product.image}}
                                                style={styles.IntroImg}
                                                
                                            />
                                            <Text  numberOfLines={2} style={styles.IntroName}>{product.nameProduct}</Text>
                                            <View style={styles.IntroPriceWrap}>
                                                <Text style={styles.IntroPriceOld}>{product.price},000đ</Text>
                                                <Text style={styles.IntroPrice}>{priceDiscount(product)},000đ</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                            )
                        })
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    IntroProduct: {
        flex: 1,
        marginBottom: 10
    },
    IntroProductTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    IntroProductWrap: {
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
