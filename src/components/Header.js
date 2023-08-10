import { View, Text } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={{backgroundColor:'white',padding:12,shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,}}>
      <Text style={{fontSize:16,fontWeight:'600',color:'black'}}>{title}</Text>
    </View>
  )
}

export default Header