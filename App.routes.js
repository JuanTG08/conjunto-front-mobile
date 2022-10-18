import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import AdvertisementsScreen from './app/screens/AdvertisementsScreen/AdvertisementsScreen';
import HomeScreen from './app/screens/HomeScreen/HomeScreen';
import LoginScreen from './app/screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Login' component={LoginScreen} />
                </Stack.Group>
                <Stack.Group>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="AdvertisementList" component={AdvertisementsScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRoutes;