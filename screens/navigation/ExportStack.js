import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Export from '../scr/Export/Export'

const Stack = createNativeStackNavigator();

const ExportStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ExportS" component={Export} />
        </Stack.Navigator>
    );
};

export { ExportStack }