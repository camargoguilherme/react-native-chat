// Import React Navigation
import { createStackNavigator, createSwitchNavigator, createAppContainer  } from 'react-navigation';

// Import the screens
import Login from '../login';
import SignUp from '../signup';
import Forgot from '../forgot';
import Users from '../users';
import Chat from '../chat';



// Create the navigator
const Home = createStackNavigator({
  Users: { screen: Users },
  Chat: { screen: Chat }
},{
  headerMode: 'screen',
  mode: 'card',
  initialRouteName: 'Users'
});

// Create the switchNavigator
const switchNavigator = createSwitchNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Forgot: { screen: Forgot},
  Home: { screen: Home }
},{
  headerMode: 'screen',
  mode: 'card',
  initialRouteName: 'Login',
});

/*
// Create the drawerNavigator
export const Drawer = createDrawerNavigator(
  {

  },
  {
    initialRouteName: '',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    //contentComponent: DrawerContent,
    contentComponent: props => <SideBar {...props} />,
    
  }
);
*/

const Route = createAppContainer(switchNavigator);
export default Route;
