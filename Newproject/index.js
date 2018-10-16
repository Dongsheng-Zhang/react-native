/** @format */

import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createStackNavigator } from 'react-navigation';
// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import Home from './src/pages/home';
import Detail from './src/pages/detail';

const modalStack = createStackNavigator(
    {
        App: {
            screen:App
        },
        Home: {
            screen: Home
        },
        Detail: {
            screen: Detail
        }
    },{
        navigationOptions:{//去除默认顶部导航
            headerStyle: { elevation: 0, shadowOpacity: 0, height: 0, backgroundColor: "#2196f3"}
        }
    }
)

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => modalStack);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

