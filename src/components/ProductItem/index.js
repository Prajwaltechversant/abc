import React from 'react'
import styles from './style'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/slices/productSlice';


export default function Product({ item }) {

    const dispatch = useDispatch()
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (
        <Card style={styles.card}>
            <Card.Title title={item.title}  left={LeftContent} />
            <Card.Cover source={{ uri: item.uri }} />
            <Card.Actions>
                <Button onPress={()=>dispatch(deleteProduct(item.title))}>Delete</Button>
            </Card.Actions>
        </Card>
    )
}