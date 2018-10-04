/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// Redux
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';

import Main from './components/main';

AppRegistry.registerComponent(appName, () => Main);
