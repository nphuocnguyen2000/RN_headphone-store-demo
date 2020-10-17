
import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Platform } from 'react-native'
import HomeHeader from './HomeHeader';
import HomeBanner from './HomeBanner';
import HomeCategory from './HomeCategory';
import HomeIntroProduct from './HomeIntroProduct';
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions/index'

export default function HomeMain({navigation}) {
    const dispatch = useDispatch()
    useEffect( () =>(
       dispatch(actions.actFetchPostRequest('shops'))
    ), [])
    return (
        <SafeAreaView style={styles.Container}>
            <HomeHeader navigation={navigation}/>
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                <HomeBanner />
                <HomeCategory navigation={navigation} />
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
