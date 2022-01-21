import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import Episode_1 from 'screens/sharedElement/Episode_1';
import menu from './menu';

const Stack = createNativeStackNavigator();
const index = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            <Stack.Screen
                name='SharedElementMenu'
                component={menu}
            />
            <Stack.Screen
                name='Episode_1'
                component={Episode_1}
            />
        </Stack.Navigator>
    );
};

export default index;
