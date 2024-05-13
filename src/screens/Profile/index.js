import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import styles from './style'
import Signup from '../Signup Page'
import { UserContextAPI } from '../../context/userContext'
export default function Profile() {

  const {user} = useContext(UserContextAPI)
  console.log(user,"fghjk")

 
  return (
    <View>
      <Text>Profile</Text>
      <View>
        <Signup page="profile" user={user}/>
      </View>
    </View>
  )
}