
import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native'
import HomeHeader from './HomeHeader';
import HomeBanner from './HomeBanner';
import HomeCategory from './HomeCategory';
import HomeIntroProduct from './HomeIntroProduct';
import { useScrollToTop } from '@react-navigation/native';

export default function HomeMain({navigation}) {
    const ref = React.useRef(null);
    useScrollToTop(ref);
    return (
        <SafeAreaView style={styles.Container}>
            <HomeHeader navigation={navigation}/>
            <ScrollView showsVerticalScrollIndicator={false} ref={ref}>
                <HomeBanner />
                <HomeCategory />
                <HomeIntroProduct name='HeadPhone' navigation={navigation}/>
                <HomeIntroProduct name='AirPod' navigation={navigation}/>
                <HomeIntroProduct name='Microphone' navigation={navigation}/>
                <HomeIntroProduct name='Speaker' navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        ...Platform.select({
            android: {
                paddingTop: 35
            }
        }),
        paddingHorizontal: 10,
    },
})
