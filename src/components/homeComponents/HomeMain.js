
import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Platform, RefreshControl } from 'react-native'
import {
    useScrollToTop,
  } from '@react-navigation/native';
import HomeHeader from './HomeHeader';
import HomeBanner from './HomeBanner';
import HomeCategory from './HomeCategory';
import HomeIntroProduct from './HomeIntroProduct';
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions/index'

export default function HomeMain({navigation}) {
    const ref = React.useRef(null);
    useScrollToTop(ref);
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useDispatch()
    useEffect( () =>(
       dispatch(actions.actFetchPostRequest('shops'))
    ), [])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(actions.actFetchPostRequest('shops'))
        setRefreshing(false);
    }, []);
    return (
        <SafeAreaView style={styles.Container}>
            <HomeHeader navigation={navigation}/>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                ref={ref}
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
