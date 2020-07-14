import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const image = require('../../assets/pic2.jpg');
const win = Dimensions.get('window');
const ratio = win.width/541;

export function Register({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.registerview}>
                <View style={styles.registerheader}>
                    <View>
                        <Text style={styles.title}>Sign Up</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                          onPress={()=> {
                            navigation.navigate('Login')
                          }}
                        >
                            <Text style={styles.button}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputview}>
                <View style={styles.registerfield}>
                <TextInput 
                        placeholder="Username"
                        keyboardType="email-address"
                        onChangeText={(email) => this.setState({email})}
                        style={styles.textinput}
                    />
                </View>
                <View style={styles.registerfield}>
                <TextInput 
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={(email) => this.setState({email})}
                        style={styles.textinput}
                    />
                </View>
                <View style={styles.registerfield}>
                <TextInput 
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                        style={styles.textinput}
                />
                </View>
                <View style={styles.registerfield}>
                <TextInput 
                        placeholder="Dropdown"
                        keyboardType="email-address"
                        onChangeText={(email) => this.setState({email})}
                        style={styles.textinput}
                />
                </View>
                </View>
            </View>
            <View style={styles.submit}>
                <TouchableOpacity style={styles.submittext} >
                    <Text style={styles.btntext}>￫</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imageview}>
                <Image
                    source={image}
                    style={styles.image}
                />
            </View> 
        </View>
      )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column'
  },
  registerheader: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: 10,
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold'
  },
  button: {
    color: '#FB8FB0',
    textDecorationLine: 'underline'
  },
  inputview: {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 0,
  },
  textinput: {
    borderBottomColor: '#DED5D9',
    borderBottomWidth: 1 
  },
  registerfield: {
    marginTop: '8%',
  },
  imageview: {
    bottom: '-10%',
  },
  image: {
    width: win.width,
    height: '75%',
    borderTopLeftRadius:100,
    borderTopRightRadius: 100,
  },
  submittext: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#FB8FB0',
    right: '20%',
    borderRadius: 50,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 3,
  },
  btntext: {
    fontSize: 50,
    color: '#fff',
  },
  submit: {
    top: '5%',
  },
})