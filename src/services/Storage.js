import { 
  AsyncStorage, 
  Alert 
} from 'react-native';

const USER = '@Chat:user';

export const getUser = async () => {
  let user = await AsyncStorage.getItem(USER);
  return JSON.parse(user);
};

export const setUser = async (user) => {
  await AsyncStorage.setItem(USER, JSON.stringify(user));
}