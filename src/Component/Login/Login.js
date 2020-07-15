import React, {useState, useEffect }  from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'

const image = require('../../assets/background.jpg')

export function Login({navigation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function login(){
      if(username === 'admin' && password==='admin'){
        navigation.navigate('Home')
      }
      else{
        alert('Sai tên đăng nhập hoặc mật khẩu')
      }
    }
    return(
      <View style={styles.container}>
          <ImageBackground source={image} style={styles.image} imageStyle={{opacity:0.5}}>
            <View style={styles.header}>
                <Text style={styles.screenheader}>Welcome Back</Text>
            </View>
            <View style={styles.loginview}>
                <View style={styles.submit}>
                    <TouchableOpacity style={styles.submittext}  
                    onPress={login}>
                        <Text style={styles.btntext}>￫</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.logininput}>
                <Text style={styles.formheader}>Sign In</Text>
                <View style={styles.inputfield}>
                    <TextInput 
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={username => setUsername(username)}
                        value={username}
                        style={styles.textinput}
                    />
                </View>
                <View style={styles.inputfield}>
                    <TextInput 
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        value={password}
                        style={styles.textinput}
                    />
                </View>
                <View style={styles.buttonview}>
                    <View>
                        <TouchableOpacity 
                        onPress={() => {
                          navigation.navigate('Forgetpass')
                        }}>
                            <Text style={styles.button}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity 
                        onPress={() => {
                          navigation.navigate('Register')
                        }}>
                            <Text style={styles.button}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
          </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '60%'
  },
  screenheader: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: '20%',
    marginLeft: '20%'
  },
  loginview: {
      height: '55%', 
      width: '100%',
      backgroundColor: '#fff',
      position: 'absolute',
      bottom: '-10%',
      borderTopLeftRadius:100,
      borderTopRightRadius: 100,
  },
  formheader: {
      fontWeight: 'bold',
      fontSize: 24
  },
  logininput: {
      marginTop: '8%',
      marginLeft: '10%',
      marginRight: '10%'
  },
  inputfield: {
      marginTop: '8%'
  },
  buttonview: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  button: {
    color: '#FB8FB0',
    textDecorationLine: 'underline'
  },
  textinput: {
    borderBottomColor: '#DED5D9',
    borderBottomWidth: 1 
  },
  submit: {
    top: '-10%',
  },
  submittext: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#fff',
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
    color: '#FB8FB0'
  },
});
