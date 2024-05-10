import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './style'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from 'react-redux';
import { signInuser } from '../../redux/slices/addUserSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginContextAPI } from '../../context/LoginContext';
import * as Keychain from 'react-native-keychain';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { getUserCred, setKeyChain, route } from './keychain';
import { useScreenContext } from '../../context/ScreenContextProvider';
export default function Login({ navigation, route }) {
    const dispatch = useDispatch()
    const data = useSelector(state => state.addUser)

    const { setIsLogged } = useContext(LoginContextAPI)
    const [showPassword, setShowPassword] = useState(false)

    // const screenContext = useScreenContext()


    // const screenStyles = styles(screenContext,
    //     screenContext[screenContext.isPortrait ? 'windoWidth' : 'windoHeight'],
    // )

    const [isCheckedRememberMe, setIsCheckedRememberMe] = useState(false)
    // console.log(data, "aaaa")
    // const usersData = useSelector(state=>state.)
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    // useEffect(() => {
    //     console.log(loginData);
    // }, [loginData])
    // console.log(navigation)
    const handleNavigate = () => {
        navigation.push('Signup')
    }

    // console.log(route)
    const handleLogin = async () => {
        const { username, password } = loginData;
        if (!username || !password) {
            Alert.alert("Please fill the form completely")
        }
        else {
            // const response =dispatch(signInuser(loginData))
            // console.log(response)
            const user = data.filter(item => item.username === username && item.password === password)
            // console.log(user)
            if (user.length > 0) {
                try {
                    if (isCheckedRememberMe) {
                        setKeyChain(loginData)
                        await AsyncStorage.setItem('isLogged', "true")
                        setIsLogged("true")
                        // const e = await AsyncStorage.getItem(`user_${username}`)
                        // const ee = JSON.parse(e)
                        // console.log("e", ee)
                    }
                    else {
                        await AsyncStorage.setItem('isLogged', "true")
                        setIsLogged("true")
                    }
                    //   const response =  await Keychain.getGenericPassword()
                    //   console.log(response, "keychain")
                }
                catch (err) {
                    console.log(err)
                }
            }
            else {
                Alert.alert("Invalid Username or Password")

            }
        }
    }

    const setShowPasswordfn = () => {
        setShowPassword(!showPassword)

    }

    const checkRememberMe = async () => {
        const userCred = await AsyncStorage.getAllKeys()
        console.log(userCred)
        const user = await AsyncStorage.getItem(`${userCred[userCred.length - 1]}`)
        const userdata = user != null ? JSON.parse(user) : null;
        setLoginData({ username: userdata.username, password: userdata.password })
    }
    useEffect(() => {
        checkRememberMe()
    }, [])

    useEffect(() => {
        if (route.params) {
            setLoginData({ username: route.params?.username })
            setLoginData({ password: route.params.password })
        }
    }, [route.params?.username])
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/585/540/original/m-logo-business-template-vector-icon.jpg' }} width={100} height={100} />
            </View>
            {/* Login Form */}

            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}> Username </Text>
                    <TextInput placeholder='Enter your username'
                        onChangeText={(e) => setLoginData({ ...loginData, username: e })}
                        style={styles.inputBox}
                        value={loginData.username}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}> Password </Text>
                    <View style={styles.passwordContainer}>
                        <TextInput placeholder='Enter your Password'
                            secureTextEntry={!showPassword}
                            style={styles.inputBox}
                            onChangeText={(e) => setLoginData({ ...loginData, password: e })}
                            value={loginData.password}
                        />
                        <TouchableOpacity onPress={setShowPasswordfn}>
                            <AntDesign name='eye' style={styles.icon} color='green' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>

                    <BouncyCheckbox

                        size={25}
                        fillColor="red"
                        unFillColor="#FFFFFF"
                        text="Remember Me"
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular", color: 'black' }}
                        onPress={() => setIsCheckedRememberMe(!isCheckedRememberMe)}

                    />

                </View>
                <View style={styles.loginBox}>
                    <TouchableOpacity>
                        <Text style={{ color: 'white' }} onPress={handleLogin}>login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signupBox}>
                    <View>
                        <Text style={styles.signuptext}>Create Account</Text>
                    </View>
                    <View style={styles.signupButton}>
                        <TouchableOpacity onPress={handleNavigate}>
                            <Text style={{ color: 'blue' }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>



    )
}

