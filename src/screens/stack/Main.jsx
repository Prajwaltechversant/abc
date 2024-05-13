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
import { useSelector } from 'react-redux'




export default function Main() {
  const [token,setToken] = useState(false)
  const {  isLogged } = useContext(LoginContextAPI)
  const data = useSelector((state) => state.userData)
  AsyncStorage.getItem('perist:root').then((res)=>{
    const b = JSON.parse(res)
    console.log(b,"aas")
  })
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