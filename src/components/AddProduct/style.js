import { StyleSheet } from "react-native";

const styles =(screenContext, width, height)=> StyleSheet.create({
  root: {
    height:60,
    position:'fixed',
    bottom:-560,
    zIndex:1000,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'absolute',
    right: 10,
    left: 1,
    top: screenContext.windowisPortrait ? 0 :-100

  },
  inputBoxContainer:{
      marginHorizontal:10
  },
  IconButton: {
    borderRadius: 12,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: screenContext.windowisPortrait ? 15 :2,
    alignSelf: 'center',
    // backgroundColor:'transparent',

  },
  inputBox: {
    width: 250,
    height: 50,
    marginVertical: 10,
    borderRadius: 10
  },
  modalView: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    // padding: 55,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  textStyle: {
    color: 'black',
    fontSize: 20
  },
  btn: {
    marginTop:3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})

export default styles