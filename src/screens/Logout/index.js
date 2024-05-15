import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import { LoginContextAPI } from '../../context/LoginContext';
export default function Logout() {
    const { setIsLogged } = useContext(LoginContextAPI)

    const logout = async () => {
        await AsyncStorage.removeItem('isLogged');
        setIsLogged("")
    }
    return (
        <View style={styles.container}>
            <Button icon="lock" mode="contained" buttonColor='#eb9328' onPress={logout}>
                Logout
            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
        container:{
            marginRight:5
        }
})