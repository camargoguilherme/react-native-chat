import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c6bc0',
  },
  button:{
    height: Dimensions.get('screen').width*0.12,
    width: Dimensions.get('screen').width*0.8,
    backgroundColor: "#9a73ef",
    color: "#7a42f4"
  },
  text:{
    color: 'white'
  },
  buttonContainer:{
    flexDirection: 'row',
    margin: 10
  }
});

export default styles;