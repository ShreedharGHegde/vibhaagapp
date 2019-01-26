import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';

class Spinner extends Component {

    render() {
        return(
            <ActivityIndicator size="large" color="#00ff00" />
        )
    }
}

export default Spinner;