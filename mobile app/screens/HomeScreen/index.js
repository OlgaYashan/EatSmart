import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import {Icon, Button, Container, Header, Content, Left} from 'native-base';
import {Constants, BarCodeScanner, Permissions} from 'expo';


export default class HomeScreen extends Component{

    state={
        hasCameraPermissions: null
    }

    componentDidMount(){
        this._requestCameraPermision();
    }

    _requestCameraPermision = async ()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions:status=== 'granted',
        });
    };

    static navigationOptions = {
        headerStyle:{
            backgroundColor: "blue"
        }
    }

    _handleBarCodeReader = data =>{
        Alert.alert(
            'Scan successful!',
            JSON.stringify(data)
        );
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.paragraf}>
                    CodeTR
                </Text>
                {this.state.hasCameraPermissions === null ?
                    <Text>Requesting for camera permission</Text> :
                    this.state.hasCameraPermissions === false ?
                    <Text>Camera permission is not granted</Text> :
                    <BarCodeScanner
                        onBarCodeReader = {this._handleBarCodeReader}
                        style={{height:200, width: 200}}
                    />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "orange"
    },
    paragraf:{
        margin:24,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "green"
    }
})