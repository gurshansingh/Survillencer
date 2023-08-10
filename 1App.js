import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Rows, Row } from 'react-native-table-component';

const App = () => {
  
const tableHead = ['Chamber Number', 'Lot Code', 'Purchase Value', 'Quantity(mt)', 'Storage Name', 'Store Date', 'Vendor Name'];
const widthArr = [70, 120, 120, 90, 150, 100, 150];
const tableData = [
  ['1', 'LT0000129181', 884385.94475, 8.47, 'KANTILAL GODOWN 1', '2023-06-17T09:19:28.133399+00:00', 'NUTROVIE AGRO FPC'],
  ['1', 'LT0000129181', 884385.94475, 8.47, 'KANTILAL GODOWN 1', '2023-06-17T09:19:28.133399+00:00', 'NUTROVIE AGRO FPC'],
  ['1', 'LT0000129181', 884385.94475, 8.47, 'KANTILAL GODOWN 1', '2023-06-17T09:19:28.133399+00:00', 'NUTROVIE AGRO FPC'],
  ['1', 'LT0000129181', 884385.94475, 8.47, 'KANTILAL GODOWN 1', '2023-06-17T09:19:28.133399+00:00', 'NUTROVIE AGRO FPC']
]

  return (
    <View style={styles.container}>
         <ScrollView horizontal={true}>
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
         </ScrollView>
       </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 40, backgroundColor: '#537791' },
  textHeader: { textAlign: 'center', fontWeight: '600', fontSize:13 },
  text: { textAlign: 'center', fontWeight: '400', fontSize:12 },
  dataWrapper: { marginTop: -1 },
  row: { height: 30, backgroundColor: '#E7E6E1' }
});