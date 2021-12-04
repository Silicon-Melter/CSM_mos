import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Manual1 from '../scr/Manual/Manual1'
import Manual2 from '../scr/Manual/Manual2'

const Stack = createNativeStackNavigator();

const ManualStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Manual1" component={Manual1} />
            <Stack.Screen name="Manual2" component={Manual2} />
        </Stack.Navigator>
    );
};

export { ManualStack }


