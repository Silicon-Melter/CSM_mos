import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../scr/Dashboard/Dashboard'

const Stack = createNativeStackNavigator();

const DashboardStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DashboardS" component={Dashboard} />
        </Stack.Navigator>
    );
};

export { DashboardStack }