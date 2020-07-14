import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../Component/Login/Login'
import {Home} from '../Component/Home/Home'
import {Register} from '../Component/Register/Register'
import {Forgetpass} from '../Component/Forgetpass/Forgetpass'

const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
          <AuthStack.Screen name={"Login"} component={Login} />
          <AuthStack.Screen name={"Home"} component={Home} />
          <AuthStack.Screen name={"Register"} component={Register} />
          <AuthStack.Screen name={"Forgetpass"} component={Forgetpass} />
        </AuthStack.Navigator>
    )
}


