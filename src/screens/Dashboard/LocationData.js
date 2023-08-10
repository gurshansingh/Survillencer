import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { Table, TableWrapper, Rows, Row } from 'react-native-table-component';
import MapView,{Marker} from 'react-native-maps';
import { Header } from '../../components';

const LocationData = ({route}) => {
const [tableData, setTableData] = useState([]);
const [latLong, setLatLong] = useState();
const tableHead = ['Chamber Number', 'Lot Code', 'Purchase Value', 'Quantity(mt)', 'Storage Name', 'Store Date', 'Vendor Name'];
const widthArr = [70, 120, 120, 90, 150, 100, 150];

// let tableData = [];//[["1", "LT0000129181", 884385.94475, 8.47, "KANTILAL GODOWN 1", "2023-06-17T09:19:28.133399+00:00", "NUTROVIE AGRO FPC"], ["1", "LT0000501784", 3468966.2046875, 16.775, "KANTILAL GODOWN 1", "2023-06-17T09:22:41.094737+00:00", "NUTROVIE AGRO FPC"], ["1", "LT0022863544", 690360.05862, 7.19, "KANTILAL GODOWN 1", "2023-07-07T11:02:09.055999+00:00", "NUTROVIE AGRO FPC"], ["1", "LT0012833859", 719465.53752, 7.34, "KANTILAL GODOWN 1", "2023-07-07T11:05:53.888423+00:00", "NUTROVIE AGRO FPC"], ["1", "LT0027019020", 87176.551455, 2.555, "KANTILAL GODOWN 1", "2023-07-07T11:23:50.109287+00:00", "NUTROVIE AGRO FPC"], ["1", "LT0026906353", 144030.89988, 2.94, "KANTILAL GODOWN 1", "2023-07-07T11:57:32.20466+00:00", "NUTROVIE AGRO FPC"], ["1", "LT0013212738", 157110.82758, 3.43, "KANTILAL GODOWN 1", "2023-07-30T13:56:51.041161+00:00", "NUTROVIE AGRO FPC"]]

const {height, width} = Dimensions.get('screen');
let realHeight = height-28;
let map = realHeight / 1.6;
let table = realHeight-map;

useEffect(()=>{
  let array = [];
  route.params.data.map((data) =>{
    array.push([data.chambernumber, data.lotcode, data.purchasevalue, data.quantitymt, data.storagename, data.storedate, data.vendorname]);
  });
  setLatLong({latitude:route.params.data[0].storagelatitude,longitude:route.params.data[0].storagelongitude})
  setTableData(array);
  // console.log(tableData)
},[])

  return (
    <View style={{backgroundColor:'orange',flex:1}}>
        <Header title={'Lot Code'} />
        <View style={{backgroundColor:'green',height:table-50}}>
        {
        tableData.length > 0 ?
         (<ScrollView horizontal={true} showsVerticalScrollIndicator={true}>
           <View>
             <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
               <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.textHeader}/>
             </Table>
             <ScrollView style={styles.dataWrapper}>
               <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>  
                <Rows
                    data={tableData}
                    widthArr={widthArr}
                    style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                    textStyle={styles.text}
                  />
                
               </Table>
             </ScrollView>
           </View>
         </ScrollView>) : (<></>)
        }
         </View>
         <MapView
          style={{...StyleSheet.absoluteFillObject,height:map-50,top:table}}
          initialRegion={{
            latitude: 20.59371,
            longitude: 78.96291,
            latitudeDelta: 18,
            longitudeDelta: 18,
          }}
        >
          {
            latLong ? 
            (<Marker
              coordinate={latLong}
              image={{uri: 'https://cdn-icons-png.flaticon.com/128/3306/3306432.png'}}
            />) : (<></>)
          }
        </MapView>
       </View>
  )
}

export default LocationData;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 40, backgroundColor: 'orange' },
  textHeader: { textAlign: 'center', fontWeight: '600', fontSize:13 },
  text: { textAlign: 'center', fontWeight: '400', fontSize:12 },
  dataWrapper: { marginTop: -1 },
  row: { height: 30, backgroundColor: '#E7E6E1' }
});