import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import AdvertisementsScreen from './app/screens/AdvertisementsScreen/AdvertisementsScreen';
import HomeScreen from './app/screens/HomeScreen/HomeScreen';
import LoadingScreen from './app/screens/LoadingScreen/LoadingScreen';
import LoginScreen from './app/screens/LoginScreen/LoginScreen';
import { Environment } from './Environment';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={ Environment.PAGES_NAME.LOADING } component={LoadingScreen} />
                </Stack.Group>
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={ Environment.PAGES_NAME.LOGIN } component={LoginScreen} />
                </Stack.Group>
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={ Environment.PAGES_NAME.HOME } component={HomeScreen} />
                    <Stack.Screen name={ Environment.PAGES_NAME.ADVERTISEMENT_LIST } component={AdvertisementsScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRoutes;