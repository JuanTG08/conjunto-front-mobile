import { Button } from 'native-base';
import React, { useEffect } from 'react';
import {View, StyleSheet,Text} from 'react-native';
import { useGoOut } from './HomeLogic';

const HomeScreen = ({ route, navigation }) => {
    const goOut = () => {
        useGoOut(navigation);
    }
    return (
        <View>
            <Text>UwU</Text>
            <Button onPressOut={goOut}>Salir</Button>
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;