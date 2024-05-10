import { Alert, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ListModal from '../../components/Modal'
import { CountryDataContextAPI } from '../../context/CountryDataContext'
import { useDispatch, useSelector } from 'react-redux'
import { signupUser } from '../../redux/slices/addUserSlice'

export default function Signup({ navigation }) {

  const [countryData, setCountryData] = useState("")
  const [countryId, setCountryId] = useState()
  const [stateData, setStateData] = useState("")
  const { location, setLocation } = useContext(CountryDataContextAPI);
  const dispatch = useDispatch()

  const [confirmPassword, setConfirmPassword] = useState('')
  const getCountryId = () => {
    if (countryData) {
      setCountryId(countryData.id)
    }
  }

  useEffect(() => {
    getCountryId()
    // console.log(countryId)
  }, [countryData])
  // console.log(countryData, "countrydata");
  // console.log(stateData, "stateData")


  const [userData, setUserData] = useState({
    name: "",
    username: "",
    mobile: "",
    email: "",
    addres: "",
    country: countryData.name,
    state: stateData.name,
    password: ""
  })
  // console.log(navigation)
  const setData = () => {
    // setUserData((prev) => { ({ ...prev, country: location.country.name, state: location.state.name }) })
    setUserData(prev => ({ ...prev, country: location?.country?.name, state: location.state.name }))
  }
  useEffect(() => {
    setData()
  }, [location])
  // console.log(userData)

  // const emailValidation = (email) => {
  //   const regeX = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)
  //   const isValid = regeX.test(email)
  //   return regeX.test(isValid)
  // }
  const handleSignup = () => {

    const { name, username, mobile, email, password, state, country, addres } = userData

    if (!name || !username || !mobile || !email || !password || !country || !addres) {
      Alert.alert("please fill the form completely")
    }
    else {
      if (mobile.length < 0 || mobile.length < 10) {
        Alert.alert("Invalid Mobile number")
      }
      else {
        // const emailCheck = emailValidation(email)
        const regeX = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)
        const regeXPwd = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
        if (regeX.test(email)) {
          if (regeXPwd.test(password)) {
            if (confirmPassword === password) {
              dispatch(signupUser(userData))
              navigation.navigate('Login',{
                username:userData.username,
                password:userData.password
              })
            }
            else {
              Alert.alert("Please check the password")
            }

          }
          else {
            Alert.alert("Password must contain atleast one Uppercase letter,smaller case letter , Number and One special charactor")
          }

        }
        else {
          Alert.alert("Invalid Email address")
        }

      }


    }
  }
  const data = useSelector(state => state.addUser)

  const handleNavigation = () => {
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView>

      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View>
              <Text style={styles.inputLabel}> Name</Text>
              <TextInput placeholder='Enter your name'
                onChangeText={(e) => setUserData({ ...userData, name: e })}
                style={styles.inputBox}
              />
            </View>
            <View>
              <Text style={styles.inputLabel}> Username </Text>
              <TextInput placeholder='create a username'
                onChangeText={(e) => setUserData({ ...userData, username: e })}

                style={styles.inputBox}
              />
            </View>
            <View>
              <Text style={styles.inputLabel}> Mobile Number </Text>
              <TextInput placeholder='Enter your Mobile Number'
                onChangeText={(e) => setUserData({ ...userData, mobile: e })}
                style={styles.inputBox}
                inputMode='tel'
              />
            </View>
            <View>
              <Text style={styles.inputLabel}> email </Text>
              <TextInput placeholder='Enter your email'
                onChangeText={(e) => setUserData({ ...userData, email: e })}
                style={styles.inputBox}
                inputMode='email'
              />
            </View>


            <View>
              <Text style={styles.inputLabel}> Address </Text>
              <TextInput placeholder='Enter your Address'
                onChangeText={(e) => setUserData({ ...userData, addres: e })}
                style={styles.inputBox}
              />
            </View>

            <View>
              <Text style={styles.inputLabel}> Country </Text>
              <ListModal setCountryData={setCountryData} value="country" countryname={countryData?.name} />
              {/* {countryData &&
                <View style={{ marginVertical: 4, marginHorizontal: 5, }}>
                  <Text style={{ color: 'black', fontSize: 20 }} >{countryData.name}
                  </Text>
                </View>
              } */}
            </View>

            {
              countryData &&
              <View>
                <Text style={styles.inputLabel}> State </Text>
                <ListModal countryId={countryId} setStateData={setStateData}
                  countryname={stateData?.name}
                  value="state" />

                {/* {stateData &&
                  <View style={{ marginVertical: 4, marginHorizontal: 5, }}>
                    <Text style={{ color: 'black', fontSize: 20 }}>{stateData.name}
                    </Text>
                  </View>
                } */}
              </View>
            }

            <View>
              <Text style={styles.inputLabel}>Password </Text>
              <TextInput placeholder='Enter your Password'
                style={styles.inputBox}
                onChangeText={(e) => setUserData({ ...userData, password: e })}

              />
            </View>
            <View>
              <Text style={styles.inputLabel}> Confirm Password </Text>
              <TextInput placeholder='please confirm your Password'
                style={styles.inputBox}
                onChangeText={(e) => setConfirmPassword(e)}
              />
            </View>

            <View style={styles.signupBox}>
              <TouchableOpacity>
                <Text style={{ color: 'white' }}
                  onPress={handleSignup}
                >Sign Up</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.loginBox}>
              <View>
                <Text style={styles.logintext} >Already have an account ? </Text>
              </View>
              <View >
                <TouchableOpacity style={styles.loginButton} onPress={handleNavigation}>
                  <Text style={{ color: 'blue' }}  >Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>



        </View>
      </KeyboardAwareScrollView>


    </SafeAreaView>
  )
}

