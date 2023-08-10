'use strict';
import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Vibration
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {getAllLotDetails} from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ScanQrCode extends Component {
  onSuccess = async e => {
    const storeDate = JSON.parse(await AsyncStorage.getItem('LoginData'));
    if(storeDate!=null && storeDate.isLogin==true)
    {
      const response = await getAllLotDetails(storeDate.token, e.data);
      this.props.navigation.navigate('LocationData', {data:response});
    }
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        bottomContent={
          <View style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Scan QR Code</Text>
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default ScanQrCode;