import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity  } from 'react-native'

export default function HomeCategory(props) {
    const {navigation} = props
    return (
        <View style={styles.CateContainer}>
            <Text style={styles.CateTitle}>Danh mục sản phẩm</Text>
            <View style={styles.CateWrap}>
                <TouchableOpacity style={styles.CateItem} onPress = { () => navigation.navigate('AllProducts', {name: 'HeadPhone'})}>
                    <Image 
                        source={ require('../../assets/images/icon-headPhone.png')}
                        style={styles.CateItemImg}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.CateItem} onPress = { () => navigation.navigate('AllProducts', {name: 'AirPod'})}>
                    <Image 
                        source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/airpods-9-448167.png'}}
                        style={styles.CateItemImg}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.CateItem} onPress = { () => navigation.navigate('AllProducts', {name: 'Microphone'})}>
                    <Image 
                        source={{ uri: 'https://img.icons8.com/ios/452/microphone.png'}}
                        style={styles.CateItemImg}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.CateItem} onPress = { () => navigation.navigate('AllProducts', {name: 'Speaker'})}>
                    <Image 
                        source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/speaker-1751756-1489642.png'}}
                        style={styles.CateItemImg}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CateContainer: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    CateTitle: {
        fontSize: 17,
        color: '#333',
        paddingBottom: 5,
        fontWeight: '700'
    },
    CateWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },  
    CateItem: {
        paddingVertical: 5,
        marginRight: 20,
        flex: 1,
        alignItems: 'center',
    },
    CateItemImg: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
})
