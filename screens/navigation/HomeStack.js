import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MonitorStack } from './MonitorStack';
import { DashboardStack } from './DashboardStack';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Monitor" component={MonitorStack} />
      <Tab.Screen name="Dashboard" component={DashboardStack} />
    </Tab.Navigator>
  );
}

export { HomeStack }