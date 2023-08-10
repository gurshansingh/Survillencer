import React,{useEffect} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import { Logo, Loader } from '../images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('screen');
const AuthScreen =({navigation})=>{

    useEffect(()=>{
        const checkLoginData=async()=>{
            const storeDate = JSON.parse(await AsyncStorage.getItem('LoginData'));
            if(storeDate!=null && storeDate.isLogin==true)
            {
                navigation.navigate('DashboardScreen');
            }
            else
            {
                navigation.navigate('LoginScreen');
            }
        }

        checkLoginData();
    },[]);

    return(
        <View style={{backgroundColor:'orange',flex:1}}>
            <View style={{alignItems:'center',flex:1,justifyContent:'center'}}>
                <Image source={Logo} style={{height:150}} />
                <Image source={Loader} style={{height:60,width:width-30,marginTop:20}} />
            </View>
        </View>
    )
}

export default AuthScreen;