import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; 
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './src/Navigator/AuthStackNavigator';

const RootStack = createStackNavigator();

export default function() {
    return (
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <RootStack.Screen name={"AuthStack"} component={AuthStackNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    )
}


