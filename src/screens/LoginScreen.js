import { View, Text, ActivityIndicator, Image, TextInput, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginTheme } from '../theme';
import  { Logo } from '../images';
import { userLoginApi } from '../api';

const LoginScreen = ({route,navigation}) => {
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(()=>{
    setMobile(null)
    setPassword(null)
  },[route])

  const checkLogin=async()=>{
    const isValid = InputValidation();
    if(isValid==true)
    {
      setLoader(true);
      const response = await userLoginApi(mobile, password);
      if(response.status=='Success')
      {
        const LoginData = {
          isLogin: true,
          email:response.data.email,
          name:response.data.name,
          phonenumber:response.data.phonenumber,
          role:response.data.role,
          token:response.data.token
        }
        storeLoginData(LoginData);
        setLoader(false)
        navigation.navigate('DashboardScreen');
      }
      else
      {
        alert('Wrong UserName or Password');
        setLoader(false);
      }
    }
  }

  const storeLoginData = async (LoginData) => {
    try {
      const jsonValue = JSON.stringify(LoginData);
      await AsyncStorage.setItem('LoginData', jsonValue);
    } catch (e) {
      console.log(e)
    }
  };

  const InputValidation=()=>{
    if((mobile=='' || mobile==undefined) || (password=='' || password==undefined))
    {
      alert('Enter Valid Input')
    }
    else
    {
      return true;
    }
  }


  return (
    <View style={[LoginTheme.container,{backgroundColor:'orange',justifyContent: 'center',alignItems:'center'}]}>
        <View style={LoginTheme.loginContainer}>
          <Image source={Logo} style={LoginTheme.logo} />
          <Text style={LoginTheme.logoText}>Login</Text>
          <Text style={LoginTheme.signText}>Sign in to continue</Text>
          <View>
            <Text style={LoginTheme.labelText}>Mobile</Text>
            <TextInput value={mobile} inputMode='numeric' maxLength={10} onChangeText={(text) => setMobile(text)} placeholder='Mobile' style={LoginTheme.inputText} />
          </View>
          <View>
            <Text style={LoginTheme.labelText}>Password</Text>
            <TextInput value={password} secureTextEntry={true} onChangeText={(text) => setPassword(text)} placeholder='Password' style={LoginTheme.inputText} />
          </View>
          <TouchableOpacity onPress={() => checkLogin()} style={LoginTheme.loginBtn}>
            <Text style={LoginTheme.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
        {
          loader==true ? 
          (<View style={{position:'absolute',top:0,bottom:0,left:0,right:0,justifyContent:'center'}}>
          <ActivityIndicator size={'large'} />
        </View>) : (<></>)
        }
    </View>
  )
}

export default LoginScreen;