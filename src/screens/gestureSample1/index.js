import { View, Text, StyleSheet, PanResponder , Button} from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

export default function Gesture1() {

    // const position = new Animated.ValueXY()
    // const panRespomder = PanResponder.create({
    //     onMoveShouldSetPanResponderCapture:()=>true,
    //     onPanResponderGrant:()=>{
    //         position.setOffset({
    //             x:position.x._value,
    //             y:position.y._value,
    //         })
    //         position.setValue({x:0, y:0});
    //     },
    //     onPanResponderMove:Animated.event([
    //         null,
    //         {dx:position.x, dy:position.y},]
    // ),
    // onPanResponderRelease:()=>{
    //     position.flattenOffset();
    // },
    // })
    const translateX = useSharedValue(0);

  const handlePress = () => {
    translateX.value += 50;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
    
  }));
  return (
    <View style={styles.container}>
       <Animated.View style={[styles.ball, animatedStyles]} />
      <View style={styles.container}>
        <Button onPress={handlePress} title="Click me" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1, justifyContent:'center', alignItems:'center',
    },
    ball:{
        backgroundColor:'red',
        height:100,
        width:100,
        borderRadius:100/2
    }
})