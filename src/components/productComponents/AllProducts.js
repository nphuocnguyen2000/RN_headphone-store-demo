import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
export default function AllProducts({navigation, route}) {
    return (
        <View style={styles.Container}>
            <View style={styles.AllProductsTitle}>
                <Text style={styles.AllProductsTitleText}>{route.params.name}</Text>
                <AntDesign name='appstore1' size={20} style={{paddingHorizontal: 15}}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.IntroProductWrap}>
                    <View style={styles.IntroProductItem}>
                        <View style={styles.IntroProductItemIntro}>
                            <Image 
                                source={{uri: 'https://i5.walmartimages.com/asr/202ab4fe-c67f-4ca2-a1f4-7a5a0be2ab18_1.f277eb7613e84ccb437ec98c3a12e981.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'}}
                                style={styles.IntroImg}
                            />
                            <Text  numberOfLines={2} style={styles.IntroName}>Sony MDR-7506 Head Professional </Text>
                            <View style={styles.IntroPriceWrap}>
                                <Text style={styles.IntroPriceOld}>440,000 đ</Text>
                                <Text style={styles.IntroPrice}>340,000 đ</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.IntroProductItem}>
                        <View style={styles.IntroProductItemIntro}>
                            <Image 
                                source={{uri: 'https://i5.walmartimages.com/asr/202ab4fe-c67f-4ca2-a1f4-7a5a0be2ab18_1.f277eb7613e84ccb437ec98c3a12e981.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'}}
                                style={styles.IntroImg}
                            />
                            <Text  numberOfLines={2} style={styles.IntroName}>Sony MDR-7506 Head Professional </Text>
                            <View style={styles.IntroPriceWrap}>
                                <Text style={styles.IntroPriceOld}>440,000 đ</Text>
                                <Text style={styles.IntroPrice}>340,000 đ</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.IntroProductItem}>
                        <View style={styles.IntroProductItemIntro}>
                            <Image 
                                source={{uri: 'https://i5.walmartimages.com/asr/202ab4fe-c67f-4ca2-a1f4-7a5a0be2ab18_1.f277eb7613e84ccb437ec98c3a12e981.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'}}
                                style={styles.IntroImg}
                            />
                            <Text  numberOfLines={2} style={styles.IntroName}>Sony MDR-7506 Head Professional </Text>
                            <View style={styles.IntroPriceWrap}>
                                <Text style={styles.IntroPriceOld}>440,000 đ</Text>
                                <Text style={styles.IntroPrice}>340,000 đ</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.IntroProductItem}>
                        <View style={styles.IntroProductItemIntro}>
                            <Image 
                                source={{uri: 'https://i5.walmartimages.com/asr/202ab4fe-c67f-4ca2-a1f4-7a5a0be2ab18_1.f277eb7613e84ccb437ec98c3a12e981.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'}}
                                style={styles.IntroImg}
                            />
                            <Text  numberOfLines={2} style={styles.IntroName}>Sony MDR-7506 Head Professional </Text>
                            <View style={styles.IntroPriceWrap}>
                                <Text style={styles.IntroPriceOld}>440,000 đ</Text>
                                <Text style={styles.IntroPrice}>340,000 đ</Text>
                            </View>
                        </View>
                    </View>
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
