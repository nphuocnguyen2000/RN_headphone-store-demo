import React from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
export default function AllProducts({navigation, route}) {
    const {name} = route.params
    const data = useSelector( (state) => state.products)
    const dataFilter = data.filter( (product) => product.category ===  name.toLowerCase())
    return (
        <View style={styles.Container}>
            <View style={styles.AllProductsTitle}>
                <Text style={styles.AllProductsTitleText}>{name}</Text>
                <AntDesign name='appstore1' size={20} style={{paddingHorizontal: 15}}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.IntroProductWrap}>
                    {
                        dataFilter.length === 0 ? 
                        (
                            <ActivityIndicator size="large" color="black" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: 500 }}/>
                        )
                        :
                        (
                            dataFilter.map( (product) => {
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
                                            <Text numberOfLines={2} style={styles.IntroName}>product.name</Text>
                                            <View style={styles.IntroPriceWrap}>
                                                <Text style={styles.IntroPriceOld}>440,000 đ</Text>
                                                <Text style={styles.IntroPrice}>{product.price},000đ</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        )
                    }
                </View>
            </ScrollView>
        </View>
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
