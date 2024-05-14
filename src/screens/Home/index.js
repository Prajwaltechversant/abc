import { View, Text, Button, Alert, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginContextAPI } from '../../context/LoginContext'
import Add from '../../components/AddProduct'
import Product from '../../components/ProductItem'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

export default function Home() {
  const { setIsLogged } = useContext(LoginContextAPI)
  const logout = async () => {
    await AsyncStorage.removeItem('isLogged');
    setIsLogged("")
  }
  const products = useSelector(state => state.products)
  // let sample = products[0].uri
console.log(products)
  return (
    <View>
      <Text onPress={logout}>Home</Text>
      <Add />
      <FlatList
        data={products}
        renderItem={({ item }) => <Product item={item}
        />}
      />
    </View>
  )
}