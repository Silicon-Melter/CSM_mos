import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Question from '../scr/Monitor/Question'
import Record from '../scr/Monitor/Record'
import Result from '../scr/Monitor/Result'

const Stack = createNativeStackNavigator();

const MonitorStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Monitor1" component={Record} />
      <Stack.Screen name="Monitor2" component={Question} />
      <Stack.Screen name="Monitor3" component={Result} />
    </Stack.Navigator>
  );
};

export { MonitorStack }