import * as React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from "expo-permissions"
import { BarCodeScanner } from "expo-barcode-scanner"


export default class TransactionScreen extends React.Component{
    constructor(props){
      super(props)
      this.state ={
        domState: "normal",
        hasCameraPermission: null,
        scanned: false,
        scannedData: "",
      }
    }

    getCameraPermission = async()=>{
      const {status} = await Permissions.askAsync(Permissions.CAMERA)
      this.setState({
        hasCameraPermission: status === "granted",
        domState: "domState",
        scanned: false,
      })
    }



  render(){
     return (
          <View style={styles.container}>
            <Text>Tela de transação!</Text>

            <TouchableOpacity onPress={()=>{this.getCameraPermission()}}>
              <Text>Digitalizar QR Code!</Text>
            </TouchableOpacity>
          </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
