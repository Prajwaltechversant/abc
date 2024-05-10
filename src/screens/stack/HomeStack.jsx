import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../Profile'
import Entypo from 'react-native-vector-icons/Entypo'
const Tab = createBottomTabNavigator()

const Drawer = createDrawerNavigator()

const HomeStack = ()=>{
return(
  <>
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name='HomeDrawer' component={Home}  options={{title:"Home"}} />
    <Drawer.Screen name='Profile' component={Profile} />
  </Drawer.Navigator>
  </>
)
}

export default function BottomTabStack() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeStack} options={{
          headerShown:false,
          tabBarIcon:({color,size})=>(
            <Entypo name='home' color={'red'} size={size}  />
          )
        }}/>
    </Tab.Navigator>
  )
}