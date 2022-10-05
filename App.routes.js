import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import AdvertisementsScreen from './app/screens/AdvertisementsScreen/AdvertisementsScreen';
import HomeScreen from './app/screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AdvertisementList">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AdvertisementList" component={AdvertisementsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRoutes;