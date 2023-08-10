import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header } from '../../components'

const DashboardScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor:'orange',flex:1}}>
      <Header title="Dashboard" />
      <View style={{padding:10}}>
        <TouchableOpacity onPress={() => navigation.navigate('ScanQrCode')} style={{backgroundColor:'white',padding:15,alignItems:'center',shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,}}>
          <Text style={{color:'orange',fontWeight:'500',fontSize:15}}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DashboardScreen