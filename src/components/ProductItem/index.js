import React from 'react'
import styles from './style'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/slices/productSlice';
import { useScreenContext } from '../../context/ScreenContextProvider';
import { IconButton, MD3Colors } from 'react-native-paper';
import { View } from 'react-native';


export default function Product({ item }) {
    const screenContext = useScreenContext()

    const screenStyles = styles(screenContext,
        screenContext[screenContext.windowisPortrait ? 'windoWidth' : 'windoHeight'],
        screenContext[screenContext.windowisPortrait ? 'windowHeight' : 'windowWidth']
    )

    const dispatch = useDispatch()
    console.log(screenContext.windowWidth)
    return (
       <View style={screenStyles.container}>
         <Card style={screenStyles.card}>
            <Card.Title title={item.title} style={screenStyles.cardTitle}  />
            <Card.Cover source={{ uri: item.uri }} style={screenStyles.image} />
            <Card.Actions style={screenStyles.cardAction}>
                {/* <Button >Delete</Button> */}
               <View style={screenStyles.btnContainer}>
               <IconButton
                    icon="heart"
                    mode='contained'
                    iconColor={'red'}
                    size={20}
                    rippleColor={'blue'}
                />

                <IconButton
                    icon="delete"
                    mode='contained'
                    iconColor={'#cf2402'}
                    size={20}
                    containerColor='white'
                    rippleColor={'red'}
                    onPress={() => dispatch(deleteProduct(item.title))} 
                />

               </View>

            </Card.Actions>
        </Card>
       </View>
    )
}