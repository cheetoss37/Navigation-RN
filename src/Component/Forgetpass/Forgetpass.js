import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

const image = require('../../assets/background.jpg')
const icon = require('../../assets/logout-icon.jpg')
export function Forgetpass({navigation}) {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image} imageStyle={{opacity:0.5}}>
        <View>
            <TouchableOpacity 
            onPress={()=> {
                navigation.navigate('Login')
            }}>
                <Image source={icon} style={styles.icon}/>
            </TouchableOpacity>
        </View>
        <View style={styles.body}> 
            <Text style={styles.bigText}>Forgetpass Screen</Text>
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
    icon: {
        marginTop: 5,
        marginLeft: 5,
        width: 20,
        height: 20
    }
})