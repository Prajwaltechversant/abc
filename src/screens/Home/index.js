import { View, Text, Button, Alert } from 'react-native'
import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginContextAPI } from '../../context/LoginContext'

export default function Home() {
  const {  setIsLogged } = useContext(LoginContextAPI)
  const logout = async()=>{
    await AsyncStorage.removeItem('isLogged');
    setIsLogged("")
  }

  return (
    <View>
      <Text onPress={logout}>Home</Text>
      {/* <Button title='logout' onPress={ ()=>logout }/> */}
    </View>
  )
}