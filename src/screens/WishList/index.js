import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './style'
import { AnimatedView } from 'react-native-reanimated/lib/typescript/reanimated2/component/View'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'
import { useSharedValue } from 'react-native-reanimated';

export default function WishList() {

    const width = useSharedValue(100);

    const handlePress = () => {
        width.value = width.value + 50;
    };
    //   const width = 100;
    // const handlePress = () => {
    //     width = width+10
    //   };
    const handleBounce = () => {
        width.value = withSpring(width.value + 50);
    };

    ///


    const translateX = useSharedValue(0);

    const handletranslate = () => {
        translateX.value = withSpring(translateX.value + 50);
    };

    //
    // const translateY = useSharedValue(0);

    // const handleuseAnimate = () => {
    //     translateY.value += 50;
    // };


    // const animatedStyles = useAnimatedStyle(() => ({
    //     transform: [{ translateY: withSpring(translateY.value * 2) }],
    // }));
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Animated.View
                style={{
                    //   width:width*2,
                    width,
                    height: 100,
                    backgroundColor: 'violet',
                }}
            />
            <Button onPress={handlePress} title="width" />

            <Button onPress={handleBounce} title="bounce" />

            <View style={{ marginTop: 10, backgroundColor: 'yellow' }}>
                <Animated.View style={{ width: 100, height: 100, backgroundColor: 'red', transform: [{ translateX }] }} />
                <Button onPress={handletranslate} title="Click me" />
            </View>

            {/* <View style={{ marginTop: 10, backgroundColor: 'yellow' }}>
                <Animated.View style={{ width: 100, height: 100, backgroundColor: 'red', animatedStyles }} />
                <Button onPress={handleuseAnimate} title="Click me" />
            </View> */}
        </View>
    )
}


// const styles = StyleSheet({
//     box: {
//         width: 100,
//         height: 100
//     }
// })