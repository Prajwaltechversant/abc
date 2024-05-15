import { StyleSheet } from "react-native"


const styles =(screenContext, width, height) =>
     StyleSheet.create({
        container:{
            // backgroundColor:'green'

        },
        flatListStyle:{
            // backgroundColor:'red',
            marginTop:screenContext.windoisPortrait ? -28 : -58
        },
    searchBar: {
        marginTop:2,
        width: 200,
        alignSelf:'flex-start',
        height:50,
        backgroundColor:'#dbcfcc',
        marginLeft:5
    }
})



export default styles