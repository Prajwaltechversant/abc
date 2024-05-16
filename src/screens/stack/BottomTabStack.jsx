
import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../Profile'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createBottomTabNavigator()

const Drawer = createDrawerNavigator()



const HomeStack = ()=>{
    return(
      <>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Profile' component={Profile} />
      </Drawer.Navigator>
      </>
    )
    }

export default function BottomTabStack() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeStack}/>
    </Tab.Navigator>
  )
}