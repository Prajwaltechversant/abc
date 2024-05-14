import { View, Text, Button, Alert, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginContextAPI } from '../../context/LoginContext'
import Add from '../../components/AddProduct'
import Product from '../../components/ProductItem'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { Searchbar } from 'react-native-paper';
import styles from './style'


export default function Home() {
  const { setIsLogged } = useContext(LoginContextAPI)

  const dispatch = useDispatch()


  const logout = async () => {
    await AsyncStorage.removeItem('isLogged');
    setIsLogged("")
  }
  const products = useSelector(state => state.products)
  // let sample = products[0].uri
  console.log(products)


  const searchProduct = (item)=>{
    dispatch(searchProduct(item))
  }
  return (
    <View>
      <Text onPress={logout}>Home</Text>
      <Searchbar style={styles.searchBar}
        placeholder="Search"
        onChangeText={(e)=>searchProduct(e)}
      />
      <Add />
      <FlatList
        data={products}
        renderItem={({ item }) => <Product item={item}
        />}
      // ListFooterComponent={<Add />}
      />
    </View>
  )
}