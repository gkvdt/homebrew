import {
    StackNavigator,
  } from 'react-navigation';
  import MainScreen from './Main';
  import ProfileScreen from './Profile';
   
  const AppRouter = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
  });