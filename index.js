
import {AppRegistry} from 'react-native';
import Router from './Navigator';
//import Navigator from './Navigator'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
