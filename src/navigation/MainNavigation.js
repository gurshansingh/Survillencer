import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, AuthScreen } from '../screens';
import { DashboardScreen, ScanQrCode, LocationData } from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

const MainNavigation=()=>{
    return(
    <Stack.Navigator initialRouteName='AuthScreen'>
        <Stack.Screen options={{headerShown:false}} name="AuthScreen" component={AuthScreen} />
        <Stack.Screen options={{headerShown:false}} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false}} name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen options={{headerShown:false}} name="ScanQrCode" component={ScanQrCode} />
        <Stack.Screen options={{headerShown:false}} name="LocationData" component={LocationData} />
    </Stack.Navigator>
    )
}

export default MainNavigation;