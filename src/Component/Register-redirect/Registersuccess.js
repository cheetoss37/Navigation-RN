import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const image = require('../../assets/background.jpg')
const icon = require('../../assets/logout-icon.jpg')
export function Registersuccess({navigation}) {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image} imageStyle={{opacity:0.5}}>
        <View>
        </View>
        <View style={styles.body}> 
            <Text style={styles.bigText}>Register Success</Text>
            <TouchableOpacity 
            onPress={()=> {
                navigation.navigate('Login')
            }}>
                <Text style={{fontWeight: 'bold', color: 'red'}}>Login</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btn: {
        color: 'red'
    },
    body: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    bigText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000',
    },
})