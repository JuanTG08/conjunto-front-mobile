import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRoutes from './App.routes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from './app/screens/HomeScreen/HomeScreen';

export default function App() {
  return (
    <>
      <AppRoutes></AppRoutes>
    </>
  );
}
