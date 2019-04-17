import {StyleSheet, Dimensions,} from 'react-native';

const styles = StyleSheet.create({
  /** stylesheet to component user **/
  containerUser:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    height: Dimensions.get('screen').width*0.15,
    width: Dimensions.get('screen').width, 
    
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 0,
    margin: 5
  },
  infoUser:{
    flex: 0.9,
    margin: 5
  },
  circle:{
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').width*0.1,
    width: Dimensions.get('screen').width*0.1, 
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 100,
  },
  messages:{
    justifyContent: 'center',
    alignItems: 'center',
    
    height: 20,
    width: 20
  },
  status:{
    height: 10,
    width: 10,
    borderRadius: 5
  }
});

export default styles;