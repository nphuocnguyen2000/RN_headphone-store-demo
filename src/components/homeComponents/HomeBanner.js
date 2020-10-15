import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

export default function HomeBanner(props) {
    return (
        <View style={styles.BannerSell}>
            <Image 
                source={{uri: 'https://image.freepik.com/free-psd/headphone-social-media-post-banner-template_84443-406.jpg'}} 
                style={styles.ImageBannerSell}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    BannerSell: {
        height: 250,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
    },
    ImageBannerSell: {
        flex: 1,
        height: 250,
    },
})
