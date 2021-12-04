import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Setting from '../scr/Setting/Setting'

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingS" component={Setting} />
    </Stack.Navigator>
  );
};

export { SettingStack }