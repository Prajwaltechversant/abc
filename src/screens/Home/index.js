import { View, Text, Button, Alert, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginContextAPI } from '../../context/LoginContext'
import Add from '../../components/AddProduct'
import Product from '../../components/ProductItem'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { Searchbar } from 'react-native-paper';
import styles from './style'
import { searchProduct } from '../../redux/slices/productSlice'
import { useScreenContext } from '../../context/ScreenContextProvider'


export default function Home() {
  const [searchStatus, setSearchStatus] = useState(false)

  const [searchResults, setSearchresults] = useState([])

  const dispatch = useDispatch()

  const screenContext = useScreenContext()

  const screenStyles = styles(screenContext,
    screenContext[screenContext.windowisPortrait ? 'windoWidth' : 'windoHeight'],
    screenContext[screenContext.windowisPortrait ? 'windowHeight' : 'windowWidth']
  )


  const products = useSelector(state => state.products.allProducts)
  // let sample = products[0].uri
  console.log(screenContext.windowisPortrait, "screenContext.windowisPortrait")


  const searchProductS = (item) => {
    if (item.trim() !== '') {
      dispatch(searchProduct(item))
      setSearchStatus(true)
    }
    else {
      setSearchresults([])
    }
  }
  const searchresult = useSelector(state => state.products.searchItems)

  useEffect(() => {
    setSearchresults(searchresult)
  }, [searchresult])
  console.log(searchresult, "searchResult")
  return (
    <View style={screenStyles.container}>
      {products.length > 0 &&
        <Searchbar style={screenStyles.searchBar}
          placeholder="Search"
        
          onChangeText={(e) => searchProductS(e)}
        />}
      <Add />

{   screenContext.windowisPortrait ?   <FlatList 
      style={screenStyles.flatListStyle}
        data={searchResults.length > 0 ? searchResults : products}
        // data={ products}
        ListEmptyComponent={<Text style={{ textAlign: 'center' }}>No Products found</Text>}
        renderItem={({ item }) => <Product item={item}
        extraData={searchResults}
        />
        }
        numColumns={2}
        key={'portrait'}

      />
      :
      <FlatList 
      style={screenStyles.flatListStyle}
        data={searchResults.length > 0 ? searchResults : products}
        // data={ products}
        ListEmptyComponent={<Text style={{ textAlign: 'center' }}>No Products found</Text>}
        renderItem={({ item }) => <Product item={item}
        extraData={searchResults}
        />
        }
        numColumns={4}
        key={'landscape'}

      />}
    </View>
  )
}