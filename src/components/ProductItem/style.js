import { StyleSheet } from "react-native";

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    container: {
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:5,
      marginBottom:2,
      // backgroundColor:'green',
      marginTop:-3
    },
    card: {
      alignSelf: 'center',
      width: screenContext.windowisPortrait ? 180 : 190,
      height: screenContext.windowisPortrait ? 245 : 190,
      marginHorizontal: 10,
      // backgroundColor:'yellow'

    },
    cardTitle:{
      padding:0
    },
    cardAction:{
        height:40, 
        padding:2
    },
    btnContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      width:'100%'
    },
    image: {
      height: screenContext.windowisPortrait ? 150 : 100
    }
  })


export default styles