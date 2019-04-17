import {StyleSheet, Dimensions,} from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    paddingLeft: 20,
    width: Dimensions.get('screen').width*0.8,
    borderRadius: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    backgroundColor: '#FFF'
  }
});

export default styles;