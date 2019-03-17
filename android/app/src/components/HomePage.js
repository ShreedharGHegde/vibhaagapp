import React, {Component} from 'react';
import {View} from 'react-native'
import Profile from './Profile';
import Notifications from './Notifications'
import QRSCanner from './QRScanner'
import {DrawerNavigator} from 'react-navigation';


class HomePage extends Component {

    render() {

        return (<Container/>)
    }
}

const Container = DrawerNavigator({
    Home: {
      screen: Profile
    },
    QRSCanner: {
        screen: QRSCanner
    },
    Notifications: {
      screen: Notifications
    }

  })

  export default HomePage;