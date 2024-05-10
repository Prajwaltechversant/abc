import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { useScreenContext } from '../../context/ScreenContextProvider'


export default function index() {


    const screenContext = useScreenContext()


    const screenStyles = styles(screenContext,
        screenContext[screenContext.isPortrait ? 'windoWidth' : 'windoHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth']
    )
    return (
        <View style={styles.container}>
                <Image style={styles.logo} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/585/540/original/m-logo-business-template-vector-icon.jpg' }} width={100} height={100} />

        </View>
    )
}