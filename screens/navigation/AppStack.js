import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from "react-native";
import MyDrawer from '../component/MyDrawer'

import { HomeStack } from './HomeStack';
import { ExportStack } from './ExportStack';
import { ManualStack } from './ManualStack';
import { SettingStack } from './SettingStack';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <MyDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#034c81',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    fontSize: 15,
                },
            }}>
            <Drawer.Screen
                name="Home"
                component={HomeStack}
            />
            <Drawer.Screen
                name="Manual"
                component={ManualStack}
            />
            <Drawer.Screen
                name="Export"
                component={ExportStack}
            />
            <Drawer.Screen
                name="Setting"
                component={SettingStack}
            />
        </Drawer.Navigator>
    );
};

export default AppStack;