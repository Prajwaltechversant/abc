import { View, Text, KeyboardAvoidingView, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import { IconButton, MD3Colors, } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './style';
import { TextInput, Button } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { addProduct } from '../../redux/slices/productSlice';
import { useDispatch } from 'react-redux';
import { useScreenContext } from '../../context/ScreenContextProvider';



export default function Add() {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white' };
    const [text, setText] = React.useState("");


    const screenContext = useScreenContext()

    const screenStyles = styles(screenContext,
        screenContext[screenContext.windowisPortrait ? 'windoWidth' : 'windoHeight'],
        screenContext[screenContext.windowisPortrait ? 'windowHeight' : 'windowWidth']
    )


    const dispatch = useDispatch()

    const [product, setProduct] = useState({
        title: "",
        uri: ""
    })

    const handleUpload = async () => {

        const result = await launchCamera()
        console.log(result.assets[0].uri)
        setProduct({ ...product, uri: result.assets[0].uri })

    }
    // console.log(product)


    const handleSubmit = () => {
        const { title, uri } = product
        if (!product || !uri) {
            Alert.alert("Please add all details to proceed")
        }
        else{
            dispatch(addProduct(product))
            hideModal()
        }
    }
    return (
        <View style={screenStyles.root}>
            <View style={screenStyles.container} >
                <IconButton
                    icon={'message-plus'}
                    mode='contained'
                    // iconColor={MD3Colors.success}
                    iconColor='white'
                    size={30}
                    style={styles.IconButton}
                    containerColor='green'
                    onPress={showModal}
                />
            </View>

            

            <View style={screenStyles.modalContainer}>
                <Modal visible={visible} style={screenStyles.modalContainer} >
                    <View style={screenStyles.modalView}>
                        <Text style={screenStyles.textStyle}> Add Product </Text>
                        <KeyboardAvoidingView>
                            <View>
                                <TextInput
                                    mode='flat'
                                    label={'Product'}
                                    placeholder='Product title'
                                    multiline={true}
                                    style={screenStyles.inputBox}
                                    onChangeText={(e) => setProduct({ ...product, title: e })}
                                />

                                {/* <Text style={{ textAlign: 'center' }}>Or</Text> */}
                                <Button icon="upload" mode="contained"
                                    style={screenStyles.inputBox}
                                    onPress={handleUpload}>
                                    Upload Product Image
                                </Button>
                            </View>
                        </KeyboardAvoidingView>
                        <View style={screenStyles.btn}>
                            <Button icon="cancel" mode="contained" onPress={hideModal}>
                                Cancel
                            </Button>
                            <Button icon="upload" mode="contained" onPress={handleSubmit}>
                                Submit
                            </Button>
                        </View>
                    </View>
                </Modal>
            </View>

        </View>
    )
}