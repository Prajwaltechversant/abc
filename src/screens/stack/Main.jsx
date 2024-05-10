import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Login from '../Signin Page'
import Signup from '../Signup Page'
import Home from '../Home'
import LoginStack from './LoginStack'
import HomeStack from './HomeStack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginContextAPI } from '../../context/LoginContext'
import BottomTabStack from './HomeStack'




export default function Main() {
  const [token,setToken] = useState(false)
  const {  isLogged } = useContext(LoginContextAPI)

  const checkIsLogged = async()=>{
    const response = await AsyncStorage.getItem('isLogged')
    if(response){
        setToken(true)
    }else{
      setToken(false)
    }
  }
  useEffect(()=>{
    checkIsLogged()
  },[isLogged])
  return (
    <>
      {
        !token ?
          <LoginStack />
          :
          <BottomTabStack/>
          }
    </>
  )
}