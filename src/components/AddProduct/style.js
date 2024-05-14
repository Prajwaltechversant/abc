import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'fixed',
    right: 10,
    left:1,
    backfaceVisibility: 'hidden',
    zIndex:10000,
    

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
    marginTop: 200,
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
    justifyContent:'center',
    flex:1
  },
  textStyle: {
    color: 'black',
    fontSize: 20
  },
  btn:{
    flexDirection:'row',
    justifyContent:'space-between'
  }

})

export default styles