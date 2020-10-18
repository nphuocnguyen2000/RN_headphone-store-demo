import React, {useEffect} from 'react'
// import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'
import { AntDesign, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../redux/actions/index'
import AuthScreen from '../../screens/AuthScreen';
export default function AccountMain() {
    const data = useSelector(state => state.infoUser)
    const dispatch = useDispatch()
    const { infoUser, isSignedIn } = data
    function onHandleLogout(){
        dispatch(actions.actLogout())
    }
    return (
        !isSignedIn ? 
        <AuthScreen/> 
        :
        <View style={styles.Container}>
                <StatusBar barStyle='light-content' />
                <ImageBackground 
                    source={{uri: 'https://xiaomi-mi.com/uploads/ck/custom-earphone-from-helloear-arc-and-xiaomi-006.jpg'}}
                    style={styles.ImgBG}
                >
                    <View style={styles.AccountInfo}>
                        <Image 
                            source={{uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/fc/79/af/fc79af8a-f8a3-9484-4b12-d1609da1413e/source/512x512bb.jpg'}} 
                            style={styles.AccountInfoImg}
                        />
                        <View style={styles.AccountInfoSub}>
                            <Text style={{fontWeight: '700', fontSize: 20, color: '#eee'}}>{infoUser.firstName} {infoUser.lastName}</Text>
                            <TouchableOpacity>
                                <AntDesign name='right' size={20} style={{padding: 5}} color='#eee'/>
                            </TouchableOpacity>
                        </View>
                    </View> 
                </ImageBackground>
                <View style={styles.ContainerAccount}>
                    <View style={styles.MenuAccount}>
                        <View style={styles.MenuAccountItem}>
                            <AntDesign name='profile' size={20}/>
                            <Text style={{ paddingHorizontal: 10, fontSize: 16, fontWeight: '600' }}>Đơn hàng của tôi</Text>
                        </View>

                        <View style={styles.MenuAccountItem}>
                            <Entypo name='location' size={18}/>
                            <Text style={{ paddingHorizontal: 10, fontSize: 16, fontWeight: '600' }}>Địa chỉ của tôi</Text>
                        </View>
                        <View style={styles.MenuAccountItem}>
                            <MaterialCommunityIcons name='heart' size={18}/>
                            <Text style={{ paddingHorizontal: 10, fontSize: 16, fontWeight: '600' }}>Sản phẩm yêu thích</Text>
                        </View>
                        <View style={styles.MenuAccountItem}>
                            <MaterialCommunityIcons name='ticket-percent' size={18}/>
                            <Text style={{ paddingHorizontal: 10, fontSize: 16, fontWeight: '600' }}>Vouchers của tôi</Text>
                        </View>
                        <View style={styles.MenuAccountItem}>
                            <Entypo name='info-with-circle' size={18}/>
                            <Text style={{ paddingHorizontal: 10, fontSize: 16, fontWeight: '600' }}>Chính sách đổi trả</Text>
                        </View>
                    
                    </View>
                </View>
                <TouchableOpacity onPress={onHandleLogout}>
                    <View style={styles.AccountLogout}>
                        <Text style={{color: '#eee'}}>Đăng xuất</Text>
                    </View> 
                </TouchableOpacity>
                
            </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    ImgBG: {
        height: 180,
        width: '100%'
    },
    AccountInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: 'rgba(0,0,0,0.5)',
        top: 90,
        paddingVertical: 10,
    },
    AccountInfoImg: {
        height: 70,
        width: 70,
        borderRadius: 50,
    },
    AccountInfoSub: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },


    //
    ContainerAccount: {
        paddingVertical: 10,
    },

    ///
    MenuAccount: {
        padding: 10,
        margin: 10,
        borderRadius: 2,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        // backgroundColor: 'red'
    },
    MenuAccountItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom:5,
    },

    //
    AccountLogout: {
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 20
    }
})
