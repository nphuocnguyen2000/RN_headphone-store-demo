import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function HomeIntroProduct(props) {
    const { navigation, name } = props
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
                        <Text style={styles.IntroName}>Sony MDR-7506 Head Professional </Text>
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
                        <Text style={styles.IntroName}>Sony MDR-7506 Head Professional </Text>
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
                        <Text style={styles.IntroName}>Sony MDR-7506 Head Professional </Text>
                        <View style={styles.IntroPriceWrap}>
                            <Text style={styles.IntroPriceOld}>440,000 đ</Text>
                            <Text style={styles.IntroPrice}>340,000 đ</Text>
                        </View>
                    </View>
                </View>
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
        overflow: 'hidden'
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
